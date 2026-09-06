<script setup lang="ts">
import { citedTextPlainText, type CampaignSection } from '~/content/remove-flock-stockton'

defineProps<{ section: CampaignSection }>()
const { t } = useI18n()
const sourceLabels = ['networkVehicle', 'networkVideo', 'networkDrone']
</script>

<template>
  <section id="the-network" class="flock-section flock-field landing-system" aria-labelledby="network-title">
    <header class="flock-section-head">
      <h2 id="network-title" class="flock-heading landing-system-heading">{{ section.title }}</h2>
      <p class="flock-copy">{{ section.summary }}</p>
    </header>

    <figure class="landing-network" aria-labelledby="network-title">
      <h3 class="landing-network-stage">{{ t('removeFlock.landing.networkCollection') }}</h3>
      <ul class="landing-network-sources" role="list">
        <li v-for="(point, index) in section.points" :key="sourceLabels[index]" class="landing-network-source">
          <p class="landing-network-date">
            {{ t(`removeFlock.landing.${index === 0 ? 'networkExisting' : 'networkExpansion'}`) }}
          </p>
          <h4>{{ t(`removeFlock.landing.${sourceLabels[index]}`) }}</h4>
          <p>{{ citedTextPlainText(point) }}</p>
        </li>
      </ul>

      <div class="landing-network-connector" aria-hidden="true">↓</div>
      <div class="landing-network-platform">
        <h3>{{ t('removeFlock.landing.networkConnection') }}</h3>
        <p>{{ t('removeFlock.landing.networkPlatform') }}</p>
      </div>
      <div class="landing-network-connector" aria-hidden="true">↓</div>
      <div class="landing-network-search">
        <h3>{{ t('removeFlock.landing.networkSearch') }}</h3>
        <p>{{ t('removeFlock.landing.networkSearchDetail') }}</p>
      </div>
      <figcaption>
        <AppActionLink to="/campaigns/remove-flock-stockton/what-stockton-bought" variant="text"
          >{{ t('removeFlock.landing.exploreSystem') }} <span aria-hidden="true">&nbsp;→</span></AppActionLink
        >
      </figcaption>
    </figure>
  </section>
</template>

<style scoped>
@layer components {
  .landing-system {
    display: grid;
    gap: var(--space-7);
  }

  .landing-system-heading {
    max-inline-size: 28ch;
  }

  .landing-network {
    display: grid;
    margin: 0;
    color: var(--color-brand-primary);
  }

  .landing-network-stage {
    margin: 0 0 var(--space-5);
    font-size: 1.375rem;
    font-weight: 650;
  }

  .landing-network-sources {
    display: grid;
    gap: var(--space-4);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .landing-network-source {
    display: grid;
    align-content: start;
    gap: var(--space-3);
    border: 1px solid var(--color-divider-strong);
    padding: var(--space-5);
    font-size: 1.0625rem;
    line-height: 1.5;
  }

  .landing-network-source h4,
  .landing-network-platform h3,
  .landing-network-search h3 {
    margin: 0;
    font-size: 1.375rem;
    font-weight: 650;
  }

  .landing-network p {
    margin: 0;
    text-wrap: pretty;
  }

  .landing-network-date {
    color: var(--color-text-muted);
    font-size: 1rem;
  }

  .landing-network-connector {
    justify-self: center;
    padding-block: var(--space-2);
    font-size: 2rem;
    line-height: 1;
  }

  .landing-network-platform,
  .landing-network-search {
    display: grid;
    gap: var(--space-2);
    justify-items: center;
    padding: var(--space-5);
    font-size: 1.125rem;
    line-height: 1.5;
    text-align: center;
  }

  .landing-network-platform {
    color: var(--color-surface);
    background: var(--color-brand-primary);
  }

  .landing-network-platform h3 {
    color: inherit;
  }

  .landing-network-search {
    background: var(--color-surface-subtle);
  }

  .landing-network-search p {
    max-inline-size: 50ch;
  }

  .landing-network figcaption {
    display: grid;
    gap: var(--space-2);
    justify-items: start;
    padding-block-start: var(--space-5);
    color: var(--color-text-muted);
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (width >= 48rem) {
    .landing-network-sources {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
}
</style>
