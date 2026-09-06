<script setup lang="ts">
import type { CampaignFact, CampaignSection } from '~/content/remove-flock-stockton'

defineProps<{ section: CampaignSection; facts: readonly CampaignFact[] }>()
const { t } = useI18n()
const council = [
  { name: 'Christina Fugazi', image: 'christina-fugazi', district: 0 },
  { name: 'Michele Padilla', image: 'michele-padilla', district: 1 },
  { name: 'Mariela Ponce', image: 'mariela-ponce', district: 2 },
  { name: 'Michael Blower', image: 'michael-blower', district: 3 },
  { name: 'Mario Enríquez', image: 'mario-enriquez', district: 4 },
  { name: 'Brando Villapudua', image: 'brando-villapudua', district: 5 },
  { name: 'Jason Lee', image: 'jason-lee', district: 6 }
]
</script>

<template>
  <section id="council-vote" class="landing-council flock-section" aria-labelledby="council-title">
    <div class="flock-field landing-council-inner">
      <header class="flock-section-head">
        <p class="flock-kicker">
          <time datetime="2026-03-31">{{ t('removeFlock.landing.voteDate') }}</time>
        </p>
        <h2 id="council-title" class="flock-heading">{{ section.title }}</h2>
        <p class="flock-copy">{{ section.summary }}</p>
      </header>

      <div class="landing-vote-result">
        <p class="landing-vote-number">7–0</p>
        <p>{{ t('removeFlock.landing.voteResult') }}</p>
      </div>

      <ul class="landing-council-members" role="list">
        <li v-for="member in council" :key="member.image" class="landing-council-member">
          <!-- eslint-disable-next-line vue/html-self-closing -->
          <img
            :src="`/images/flock-overview/${member.image}.webp`"
            alt=""
            width="400"
            height="400"
            loading="lazy"
            decoding="async"
          />
          <div class="landing-member-label">
            <p class="landing-member-name">{{ member.name }}</p>
            <p class="landing-member-district">
              {{
                member.district
                  ? t('removeFlock.landing.district', { number: member.district })
                  : t('removeFlock.landing.mayor')
              }}
            </p>
            <p class="landing-member-vote">{{ t('removeFlock.landing.yesVote') }}</p>
          </div>
        </li>
      </ul>

      <dl class="landing-council-facts">
        <div v-for="fact in facts" :key="fact.label" class="landing-council-fact">
          <dt>{{ fact.label }}</dt>
          <dd class="landing-fact-value">{{ fact.value }}</dd>
          <dd>{{ fact.detail }}</dd>
        </div>
      </dl>

      <details class="landing-records">
        <summary>{{ t('removeFlock.landing.recordLinks') }}</summary>
        <ul role="list">
          <li>
            <CampaignLandingSourceLink
              href="https://stockton.granicus.com/MinutesViewer.php?clip_id=9431&amp;view_id=48"
              >{{ t('removeFlock.landing.minutesLink') }}</CampaignLandingSourceLink
            >
          </li>
          <li>
            <CampaignLandingSourceLink
              href="https://stockton.granicus.com/MetaViewer.php?view_id=48&amp;event_id=3013&amp;meta_id=842708"
              >{{ t('removeFlock.landing.reportLink') }}</CampaignLandingSourceLink
            >
          </li>
          <li>
            <CampaignLandingSourceLink
              href="https://stockton.granicus.com/MetaViewer.php?view_id=48&amp;event_id=3013&amp;meta_id=842709"
              >{{ t('removeFlock.landing.amendmentLink') }}</CampaignLandingSourceLink
            >
          </li>
          <li>
            <CampaignLandingSourceLink href="https://www.stocktonca.gov/government/city_council/index.php">{{
              t('removeFlock.landing.councilPortraits')
            }}</CampaignLandingSourceLink>
          </li>
        </ul>
      </details>
    </div>
  </section>
</template>

<style scoped>
@layer components {
  .landing-council {
    background: var(--color-surface-subtle);
  }

  .landing-council-inner {
    display: grid;
    gap: var(--space-6);
  }

  .landing-vote-result {
    display: flex;
    align-items: center;
    gap: var(--space-5);
    color: var(--color-brand-primary);
    font-size: 1.25rem;
    font-weight: 650;
  }

  .landing-vote-result p {
    margin: 0;
  }

  .landing-vote-number {
    flex-shrink: 0;
    font-size: 3.5rem;
    line-height: 1;
    letter-spacing: -0.04em;
    font-variant-numeric: tabular-nums;
  }

  .landing-council-members {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-5) var(--space-4);
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .landing-council-member {
    display: grid;
    grid-template-columns: 4rem minmax(0, 1fr);
    min-width: 0;
    gap: var(--space-3);
    align-content: start;
  }

  .landing-council-member img {
    inline-size: 100%;
    max-inline-size: 9rem;
    block-size: auto;
    aspect-ratio: 1;
  }

  .landing-member-label {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: var(--space-1);
    font-size: 1rem;
    line-height: 1.3;
  }

  .landing-member-label p {
    margin: 0;
  }

  .landing-member-name {
    grid-column: 1 / -1;
    color: var(--color-brand-primary);
    font-weight: 700;
  }

  .landing-member-district {
    color: var(--color-brand-primary);
  }

  .landing-member-vote {
    color: var(--color-accent-action);
    font-weight: 650;
  }

  .landing-council-facts {
    display: grid;
    gap: var(--space-6);
    margin: 0;
    padding-block-start: var(--space-5);
  }

  .landing-council-fact {
    display: grid;
    gap: var(--space-2);
    align-content: start;
    font-size: 1.0625rem;
    line-height: 1.5;
  }

  .landing-council-fact dt {
    color: var(--color-brand-primary);
    font-weight: 650;
  }

  .landing-council-fact dd {
    margin: 0;
  }

  .landing-fact-value {
    color: var(--color-brand-primary);
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 1.15;
  }

  .landing-records {
    color: var(--color-brand-primary);
    font-size: 1rem;
  }

  .landing-records summary {
    min-block-size: 3rem;
    align-content: center;
    cursor: pointer;
    font-weight: 650;
  }

  .landing-records ul {
    display: grid;
    gap: var(--space-4);
    padding: var(--space-4) 0 0;
    margin: 0;
    list-style: none;
  }

  @media (width >= 32rem) {
    .landing-council-members {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .landing-council-member,
    .landing-member-label {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  @media (width >= 58rem) {
    .landing-council-members {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }

    .landing-council-facts {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: var(--space-7);
    }
  }
}
</style>
