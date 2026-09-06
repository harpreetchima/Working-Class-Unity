import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

import {
  campaignCitationOccurrenceLabel,
  campaignCitationOccurrences,
  campaignSourcesForOccurrences,
  citedTextParts,
  citedTextPlainText
} from '../app/content/remove-flock-stockton/citations.ts'
import { petitionDemand, petitionDemandCanonicalText } from '../app/content/remove-flock-stockton/petition.ts'

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const contentRoot = resolve(repositoryRoot, 'app/content/remove-flock-stockton')

const publicContentFiles = ['faq.ts', 'landing.ts', 'what-stockton-bought.ts', 'why-safeguards.ts']

async function readContentFile(fileName) {
  return readFile(resolve(contentRoot, fileName), 'utf8')
}

test('petition demand matches the approved copy byte for byte', () => {
  const approvedPetitionSha256 = 'f9d2bc4599d39ff3d55f335cfa6a282e977956a6ee1035a63d1466aeeaf8590a'
  const actualSha256 = createHash('sha256').update(petitionDemandCanonicalText).digest('hex')

  assert.equal(actualSha256, approvedPetitionSha256)
  assert.equal(petitionDemand.demands.length, 5)
})

test('edited campaign copy preserves material evidence distinctions', async () => {
  const [faq, whatStocktonBought, whySafeguards] = await Promise.all([
    readContentFile('faq.ts'),
    readContentFile('what-stockton-bought.ts'),
    readContentFile('why-safeguards.ts')
  ])

  assert.match(faq, /reviewed local records do not establish a Stockton-to-ICE transfer/)
  assert.match(faq, /maximum is authorized spending, not a total of money already spent/)
  assert.match(faq, /Some grant funds are restricted/)
  assert.match(faq, /warnings from other cities, not proof of the same events in Stockton/)
  assert.match(faq, /without becoming a member/)
  assert.match(whatStocktonBought, /records do not establish that every item is operating/)
  assert.match(whatStocktonBought, /A listed recipient is a sharing configuration, not proof of a search or disclosure/)
  assert.match(whatStocktonBought, /agreement excludes Customer Data/)
  assert.match(whatStocktonBought, /City can seek more funding or end the agreement/)
  assert.match(whySafeguards, /support that ban and other firm interim protections/)
  assert.match(whySafeguards, /Written policy and actual platform access did not always match/)

  for (const content of [faq, whatStocktonBought, whySafeguards]) {
    assert.doesNotMatch(content, /reviewedThrough:/)
  }
})

test('campaign source links are clean and unique', async () => {
  const sourceModule = await readContentFile('sources.ts')
  const urls = [...sourceModule.matchAll(/\burl:\s*'([^']+)'/g)].map((match) => match[1])
  const trackingParameters = /^(?:fbclid|gclid|mc_cid|mc_eid|utm_.+)$/i

  assert.ok(urls.length > 20, 'expected the campaign source register')
  assert.equal(new Set(urls).size, urls.length, 'source URLs must not be duplicated')

  for (const sourceUrl of urls) {
    const url = new URL(sourceUrl)

    assert.equal(url.protocol, 'https:', `${sourceUrl} must use HTTPS`)
    assert.equal(url.username, '', `${sourceUrl} must not contain a username`)
    assert.equal(url.password, '', `${sourceUrl} must not contain a password`)

    for (const parameter of url.searchParams.keys()) {
      assert.doesNotMatch(parameter, trackingParameters, `${sourceUrl} contains a tracking parameter`)
    }
  }
})

test('campaign citation references resolve to unique source records', async () => {
  const [sourceModule, ...contentModules] = await Promise.all([
    readContentFile('sources.ts'),
    ...publicContentFiles.map(readContentFile)
  ])
  const sourceIds = [...sourceModule.matchAll(/\bid:\s*'([^']+)'/g)].map((match) => match[1])
  const content = contentModules.join('\n')
  const legacyReferenceIds = [...content.matchAll(/\bsourceIds:\s*\[([\s\S]*?)\]/g)].flatMap((match) =>
    [...match[1].matchAll(/'([^']+)'/g)].map((sourceMatch) => sourceMatch[1])
  )
  const claimReferenceIds = [...content.matchAll(/\bsourceId:\s*'([^']+)'/g)].map((match) => match[1])
  const claimLocators = [...content.matchAll(/\blocator:\s*'([^']+)'/g)].map((match) => match[1])
  const pageSourceIds = [...content.matchAll(/id:\s*'([^']+)',\s*title:\s*'[^']+',\s*publisher:/g)].map(
    (match) => match[1]
  )
  const knownSourceIds = new Set([...sourceIds, ...pageSourceIds])

  assert.ok(sourceIds.length > 40, 'expected the complete campaign source inventory')
  assert.equal(knownSourceIds.size, sourceIds.length + pageSourceIds.length, 'campaign source IDs must be unique')
  assert.ok(legacyReferenceIds.length + claimReferenceIds.length > 80, 'expected the campaign citation inventory')
  assert.ok(claimLocators.length > 0, 'expected at least one production claim locator')

  for (const locator of claimLocators) {
    assert.equal(locator, locator.trim(), 'campaign locators must not contain outer whitespace')
    assert.ok(locator.length >= 5, 'campaign locators must identify a useful page or section')
  }

  for (const sourceId of [...legacyReferenceIds, ...claimReferenceIds]) {
    assert.ok(knownSourceIds.has(sourceId), `campaign content references unknown source ${sourceId}`)
  }
})

test('claim-level citations preserve prose and create stable source occurrences', () => {
  const citedText = {
    parts: [
      { text: 'First claim.', citations: [{ sourceId: 'first-source', locator: 'p. 14' }] },
      { text: ' Second claim.', citations: [{ sourceId: 'second-source' }] }
    ]
  }
  const occurrences = campaignCitationOccurrences(citedText, 'faq-basics-what-is-flock-answer-1')
  const sources = [
    { id: 'second-source', publisher: 'Second publisher', title: 'Second source', url: 'https://example.com/2' },
    { id: 'first-source', publisher: 'First publisher', title: 'First source', url: 'https://example.com/1' }
  ]

  assert.equal(citedTextPlainText(citedText), 'First claim. Second claim.')
  assert.equal(citedTextParts(citedText)[0].citations[0].locator, 'p. 14')
  assert.deepEqual(
    occurrences.map((occurrence) => occurrence.id),
    ['faq-basics-what-is-flock-answer-1-citation-1-1', 'faq-basics-what-is-flock-answer-1-citation-2-1']
  )
  assert.deepEqual(
    campaignSourcesForOccurrences(sources, occurrences).map((source) => source.id),
    ['first-source', 'second-source']
  )
  const repeatedOccurrences = [
    { id: 'citation-1', sourceId: 'first-source' },
    { id: 'citation-2', sourceId: 'first-source' },
    { id: 'citation-3', sourceId: 'second-source' }
  ]

  assert.equal(campaignCitationOccurrenceLabel(1, repeatedOccurrences[0], repeatedOccurrences), '1.1')
  assert.equal(campaignCitationOccurrenceLabel(1, repeatedOccurrences[1], repeatedOccurrences), '1.2')
  assert.equal(campaignCitationOccurrenceLabel(2, repeatedOccurrences[2], repeatedOccurrences), '2')
  assert.throws(
    () => campaignCitationOccurrenceLabel(1, { id: 'missing-citation', sourceId: 'first-source' }, repeatedOccurrences),
    /Unknown campaign citation occurrence: missing-citation/
  )
  assert.throws(
    () => campaignSourcesForOccurrences(sources, [{ id: 'missing-citation', sourceId: 'missing-source' }]),
    /Unknown campaign source: missing-source/
  )
})

test('campaign prose avoids the writing SOP banned terms outside approved copy', async () => {
  const publicContent = (await Promise.all(publicContentFiles.map(readContentFile))).join('\n').toLowerCase()
  const content = publicContent
  const bannedTerms = [
    'firstly',
    'moreover',
    'furthermore',
    'however',
    'therefore',
    'additionally',
    'specifically',
    'generally',
    'consequently',
    'importantly',
    'similarly',
    'nonetheless',
    'as a result',
    'indeed',
    'thus',
    'alternatively',
    'notably',
    'as well as',
    'despite',
    'essentially',
    'while',
    'unless',
    'also',
    'even though',
    'because',
    'in contrast',
    'although',
    'in order to',
    'due to',
    'even if',
    'given that',
    'arguably',
    'to consider',
    'ensure',
    'vibrant',
    'bustling',
    'essential',
    'vital',
    'out of the box',
    'underscores',
    'landscape',
    'tapestry',
    'soul',
    'crucible',
    'it depends on',
    'that being said',
    'you may want to',
    "it's important to note",
    'this is not an exhaustive list',
    'you could consider',
    'in summary',
    'on the other hand',
    'as previously mentioned',
    "it's worth noting that",
    'in conclusion',
    'to summarize',
    'ultimately',
    'to put it simply',
    'pesky',
    'promptly',
    'dive into',
    "in today's digital era",
    'reverberate',
    'enhance',
    'emphasise',
    'enable',
    'delve',
    'hustle and bustle',
    'revolutionize',
    'folks',
    'foster',
    'sure',
    'labyrinthine',
    'moist',
    'remnant',
    'as a professional',
    'subsequently',
    'nested',
    'game changer',
    'symphony',
    'labyrinth',
    'gossamer',
    'enigma',
    'whispering',
    'sights unseen',
    'sounds unheard',
    'a testament to',
    'dance',
    'metamorphosis',
    'indelible',
    'intricate',
    'commendable',
    'meticulous',
    'notable',
    'pivotal',
    'invaluable',
    'noteworthy',
    'meticulously',
    'methodically',
    'innovatively',
    'innovative',
    'versatile',
    'strategically',
    'groundbreaking',
    'outwith',
    'delving into',
    'spearheading',
    'unwavering commitment',
    'adept at'
  ]

  for (const term of bannedTerms) {
    const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const termPattern = new RegExp(`(?:^|[^a-z])${escapedTerm}(?=$|[^a-z])`, 'i')

    assert.doesNotMatch(content, termPattern, `campaign prose contains banned term: ${term}`)
  }
})
