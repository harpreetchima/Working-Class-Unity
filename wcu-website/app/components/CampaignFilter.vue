<script setup lang="ts">
/**
 * CampaignFilter Component
 *
 * A filter bar for filtering campaigns by status or committee.
 * Uses DaisyUI filter component pattern with radio inputs styled as buttons.
 *
 * @example
 * <CampaignFilter v-model="activeFilter" />
 */

interface Props {
  modelValue: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

// Filter options configuration
const filterOptions = [
  { value: 'active', label: 'Active' },
  { value: 'paused', label: 'Paused' },
  { value: 'completed', label: 'Completed' },
  { value: 'membership', label: 'Membership' },
  { value: 'education', label: 'Education' },
  { value: 'treasurer', label: 'Treasurer' }
]

/**
 * Determines if a filter option should be checked.
 * When modelValue is 'all', no option is checked (shows all options).
 * Otherwise, the matching option is checked.
 */
const isChecked = (value: string): boolean => {
  // 'all' is the default/reset state where no radio is visually checked
  // This allows DaisyUI filter to show all options in the default state
  if (props.modelValue === 'all') {
    return false
  }
  return props.modelValue === value
}

/**
 * Handles filter selection changes.
 * Emits the new filter value to parent component.
 */
const handleFilterChange = (value: string) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="flex justify-center overflow-x-auto py-2">
    <div class="filter" role="group" aria-label="Campaign filters">
      <!-- Reset button - clears filter back to 'all' state -->
      <input
        class="btn filter-reset"
        type="radio"
        name="campaign-filter"
        aria-label="×"
        @change="handleFilterChange('all')"
      />
      <!-- Filter options -->
      <input
        v-for="option in filterOptions"
        :key="option.value"
        class="btn"
        type="radio"
        name="campaign-filter"
        :aria-label="option.label"
        :checked="isChecked(option.value)"
        @change="handleFilterChange(option.value)"
      />
    </div>
  </div>
</template>