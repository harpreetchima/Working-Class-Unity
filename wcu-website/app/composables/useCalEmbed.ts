/**
 * Composable for Cal.com inline embed integration with proper SPA navigation handling.
 *
 * This composable handles the common issue of third-party embeds disappearing when
 * navigating away and back to a page in an SPA. It uses a reactive key that increments
 * on each mount, forcing Vue to create a fresh DOM element that Cal.com can render into.
 *
 * @example
 * ```vue
 * <script setup>
 * const { calKey } = useCalEmbed({
 *   namespace: 'my-calendar',
 *   calLink: 'myorg/myevent',
 *   elementId: 'my-cal-inline',
 *   config: { layout: 'month_view', theme: 'auto' }
 * })
 * </script>
 *
 * <template>
 *   <ClientOnly>
 *     <div :key="calKey" id="my-cal-inline" class="min-h-[500px]"></div>
 *   </ClientOnly>
 * </template>
 * ```
 */

interface CalEmbedConfig {
  layout?: 'month_view' | 'week_view' | 'column_view'
  theme?: 'auto' | 'light' | 'dark'
}

interface CalEmbedOptions {
  /** Unique namespace identifier for this embed instance */
  namespace: string
  /** The Cal.com link (e.g., 'username/event-type' or 'team/event') */
  calLink: string
  /** The DOM element ID where the embed will be rendered (without #) */
  elementId: string
  /** Cal.com embed configuration */
  config?: CalEmbedConfig
  /** Custom CSS variables for theming */
  cssVarsPerTheme?: {
    light?: Record<string, string>
    dark?: Record<string, string>
  }
  /** Whether to hide event type details */
  hideEventTypeDetails?: boolean
}

declare global {
  interface Window {
    Cal?: {
      ns?: Record<string, any>
      q?: any[]
      loaded?: boolean
      (...args: any[]): void
    }
  }
}

export function useCalEmbed(options: CalEmbedOptions) {
  const {
    namespace,
    calLink,
    elementId,
    config = { layout: 'month_view', theme: 'auto' },
    cssVarsPerTheme = {
      light: { 'cal-brand': '#f7f9fc' },
      dark: { 'cal-brand': '#ff9f48' }
    },
    hideEventTypeDetails = false
  } = options

  const isInitialized = ref(false)
  
  // Key that changes on each mount to force fresh DOM element
  const calKey = ref(0)

  /**
   * Clean up Cal.com namespace to allow re-initialization
   */
  const cleanupCalNamespace = () => {
    if (typeof window !== 'undefined' && window.Cal?.ns?.[namespace]) {
      delete window.Cal.ns[namespace]
      isInitialized.value = false
    }
  }

  /**
   * Initialize the Cal.com embed
   */
  const initializeCalEmbed = () => {
    if (typeof window === 'undefined') return

    // Clean up any existing namespace first
    cleanupCalNamespace()
    
    // Clear element content before re-initialization
    const element = document.getElementById(elementId)
    if (element) {
      element.innerHTML = ''
    }

    // Cal.com embed initialization script (IIFE pattern from Cal.com docs)
    ;(function (C: Window, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar) }
      let d = C.document
      C.Cal = C.Cal || function (...args: any[]) {
        let cal = C.Cal!
        let ar = args
        if (!cal.loaded) {
          cal.ns = {}
          cal.q = cal.q || []
          d.head.appendChild(d.createElement('script')).src = A
          cal.loaded = true
        }
        if (ar[0] === L) {
          const api = function (...apiArgs: any[]) { p(api, apiArgs) }
          const ns = ar[1]
          ;(api as any).q = (api as any).q || []
          typeof ns === 'string' ? (cal.ns![ns] = api) && p(api, ar) : p(cal, ar)
          return
        }
        p(cal, ar)
      }
    })(window, 'https://app.cal.com/embed/embed.js', 'init')

    // Initialize Cal.com with namespace
    window.Cal!('init', namespace, { origin: 'https://app.cal.com' })

    // Configure inline embed
    window.Cal!.ns![namespace]('inline', {
      elementOrSelector: `#${elementId}`,
      config,
      calLink
    })

    // Apply custom UI theming
    window.Cal!.ns![namespace]('ui', {
      cssVarsPerTheme,
      hideEventTypeDetails,
      layout: config.layout
    })

    isInitialized.value = true
  }

  // Initialize on mount with key increment to force fresh DOM element
  onMounted(() => {
    calKey.value++ // Increment key on each mount
    nextTick(() => {
      initializeCalEmbed()
    })
  })

  // Clean up on unmount
  onBeforeUnmount(() => {
    cleanupCalNamespace()
  })

  return {
    calKey: readonly(calKey),
    isInitialized: readonly(isInitialized),
    reinitialize: initializeCalEmbed,
    cleanup: cleanupCalNamespace
  }
}
