---
url: "https://vuejs.org/guide/typescript/composition-api"
title: "TypeScript with Composition API | Vue.js"
---

[Skip to content](https://vuejs.org/guide/typescript/composition-api#VPContent)

[Vue.js](https://vuejs.org/)

Search`Ctrl`  `K`

Main Navigation

Docs

[Guide](https://vuejs.org/guide/introduction) [Tutorial](https://vuejs.org/tutorial/) [Examples](https://vuejs.org/examples/) [Quick Start](https://vuejs.org/guide/quick-start) [Glossary](https://vuejs.org/glossary/) [Error Reference](https://vuejs.org/error-reference/) [Vue 2 Docs](https://v2.vuejs.org/) [Migration from Vue 2](https://v3-migration.vuejs.org/)

[API](https://vuejs.org/api/) [Playground](https://play.vuejs.org/)

Ecosystem

Resources

[Partners](https://vuejs.org/partners/) [Themes](https://vuejs.org/ecosystem/themes) [UI Components](https://ui-libs.vercel.app/) [Plugins Collection](https://www.vue-plugins.org/) [Certification](https://certificates.dev/vuejs/?ref=vuejs-nav) [Jobs](https://vuejobs.com/?ref=vuejs) [T-Shirt Shop](https://vue.threadless.com/)

Official Libraries

[Vue Router](https://router.vuejs.org/) [Pinia](https://pinia.vuejs.org/) [Tooling Guide](https://vuejs.org/guide/scaling-up/tooling)

Video Courses

[Vue Mastery](https://www.vuemastery.com/courses/) [Vue School](https://vueschool.io/?friend=vuejs&utm_source=Vuejs.org&utm_medium=Link&utm_content=Navbar%20Dropdown)

Help

[Discord Chat](https://discord.com/invite/HBherRA) [GitHub Discussions](https://github.com/vuejs/core/discussions) [DEV Community](https://dev.to/t/vue)

News

[Blog](https://blog.vuejs.org/) [Twitter](https://x.com/vuejs) [Events](https://events.vuejs.org/) [Newsletters](https://vuejs.org/ecosystem/newsletters)

About

[FAQ](https://vuejs.org/about/faq) [Team](https://vuejs.org/about/team) [Releases](https://vuejs.org/about/releases) [Community Guide](https://vuejs.org/about/community-guide) [Code of Conduct](https://vuejs.org/about/coc) [Privacy Policy](https://vuejs.org/about/privacy) [The Documentary](https://www.youtube.com/watch?v=OrxmtDw4pVI)

[Sponsor](https://vuejs.org/sponsor/) [Partners](https://vuejs.org/partners/)

[简体中文](https://cn.vuejs.org/guide/typescript/composition-api) [简体中文 Repository](https://github.com/vuejs-translations/docs-zh-cn "简体中文 Repository")

[日本語](https://ja.vuejs.org/guide/typescript/composition-api) [日本語 Repository](https://github.com/vuejs-translations/docs-ja "日本語 Repository")

[Українська](https://ua.vuejs.org/guide/typescript/composition-api) [Українська Repository](https://github.com/vuejs-translations/docs-uk "Українська Repository")

[Français](https://fr.vuejs.org/guide/typescript/composition-api) [Français Repository](https://github.com/vuejs-translations/docs-fr "Français Repository")

[한국어](https://ko.vuejs.org/guide/typescript/composition-api) [한국어 Repository](https://github.com/vuejs-translations/docs-ko "한국어 Repository")

[Português](https://pt.vuejs.org/guide/typescript/composition-api) [Português Repository](https://github.com/vuejs-translations/docs-pt "Português Repository")

[বাংলা](https://bn.vuejs.org/guide/typescript/composition-api) [বাংলা Repository](https://github.com/vuejs-translations/docs-bn "বাংলা Repository")

[Italiano](https://it.vuejs.org/guide/typescript/composition-api) [Italiano Repository](https://github.com/vuejs-translations/docs-it "Italiano Repository")

[فارسی](https://fa.vuejs.org/guide/typescript/composition-api) [فارسی Repository](https://github.com/vuejs-translations/docs-fa "فارسی Repository")

[Русский](https://ru.vuejs.org/guide/typescript/composition-api) [Русский Repository](https://github.com/vuejs-translations/docs-ru "Русский Repository")

[Čeština](https://cs.vuejs.org/guide/typescript/composition-api) [Čeština Repository](https://github.com/vuejs-translations/docs-cs "Čeština Repository")

[繁體中文](https://zh-hk.vuejs.org/guide/typescript/composition-api) [繁體中文 Repository](https://github.com/vuejs-translations/docs-zh-hk "繁體中文 Repository")

[Polski](https://pl.vuejs.org/guide/typescript/composition-api) [Polski Repository](https://github.com/vuejs-translations/docs-pl "Polski Repository")

Help Us Translate!

[github](https://github.com/vuejs/ "github") [twitter](https://x.com/vuejs "twitter") [discord](https://discord.com/invite/vue "discord")

Appearance

[github](https://github.com/vuejs/ "github") [twitter](https://x.com/vuejs "twitter") [discord](https://discord.com/invite/vue "discord")

Menu

On this page

API Preference

OptionsComposition [?](https://vuejs.org/guide/introduction#api-styles "About API preference")

API style now defaults to Composition API.

Some pages contain different content based on the API style chosen. Use this switch to toggle between APIs styles.

[Learn more](https://vuejs.org/guide/introduction#api-styles) Got it

Sidebar Navigation

## Getting Started

[Introduction](https://vuejs.org/guide/introduction) [Quick Start](https://vuejs.org/guide/quick-start)

## Essentials

[Creating an Application](https://vuejs.org/guide/essentials/application) [Template Syntax](https://vuejs.org/guide/essentials/template-syntax) [Reactivity Fundamentals](https://vuejs.org/guide/essentials/reactivity-fundamentals) [Computed Properties](https://vuejs.org/guide/essentials/computed) [Class and Style Bindings](https://vuejs.org/guide/essentials/class-and-style) [Conditional Rendering](https://vuejs.org/guide/essentials/conditional) [List Rendering](https://vuejs.org/guide/essentials/list) [Event Handling](https://vuejs.org/guide/essentials/event-handling) [Form Input Bindings](https://vuejs.org/guide/essentials/forms) [Watchers](https://vuejs.org/guide/essentials/watchers) [Template Refs](https://vuejs.org/guide/essentials/template-refs) [Components Basics](https://vuejs.org/guide/essentials/component-basics) [Lifecycle Hooks](https://vuejs.org/guide/essentials/lifecycle)

## Components In-Depth

[Registration](https://vuejs.org/guide/components/registration) [Props](https://vuejs.org/guide/components/props) [Events](https://vuejs.org/guide/components/events) [Component v-model](https://vuejs.org/guide/components/v-model) [Fallthrough Attributes](https://vuejs.org/guide/components/attrs) [Slots](https://vuejs.org/guide/components/slots) [Provide / inject](https://vuejs.org/guide/components/provide-inject) [Async Components](https://vuejs.org/guide/components/async)

## Reusability

[Composables](https://vuejs.org/guide/reusability/composables) [Custom Directives](https://vuejs.org/guide/reusability/custom-directives) [Plugins](https://vuejs.org/guide/reusability/plugins)

## Built-in Components

[Transition](https://vuejs.org/guide/built-ins/transition) [TransitionGroup](https://vuejs.org/guide/built-ins/transition-group) [KeepAlive](https://vuejs.org/guide/built-ins/keep-alive) [Teleport](https://vuejs.org/guide/built-ins/teleport) [Suspense](https://vuejs.org/guide/built-ins/suspense)

## Scaling Up

[Single-File Components](https://vuejs.org/guide/scaling-up/sfc) [Tooling](https://vuejs.org/guide/scaling-up/tooling) [Routing](https://vuejs.org/guide/scaling-up/routing) [State Management](https://vuejs.org/guide/scaling-up/state-management) [Testing](https://vuejs.org/guide/scaling-up/testing) [Server-Side Rendering (SSR)](https://vuejs.org/guide/scaling-up/ssr)

## Best Practices

[Production Deployment](https://vuejs.org/guide/best-practices/production-deployment) [Performance](https://vuejs.org/guide/best-practices/performance) [Accessibility](https://vuejs.org/guide/best-practices/accessibility) [Security](https://vuejs.org/guide/best-practices/security)

## TypeScript

[Overview](https://vuejs.org/guide/typescript/overview) [TS with Composition API](https://vuejs.org/guide/typescript/composition-api) [TS with Options API](https://vuejs.org/guide/typescript/options-api)

## Extra Topics

[Ways of Using Vue](https://vuejs.org/guide/extras/ways-of-using-vue) [Composition API FAQ](https://vuejs.org/guide/extras/composition-api-faq) [Reactivity in Depth](https://vuejs.org/guide/extras/reactivity-in-depth) [Rendering Mechanism](https://vuejs.org/guide/extras/rendering-mechanism) [Render Functions & JSX](https://vuejs.org/guide/extras/render-function) [Vue and Web Components](https://vuejs.org/guide/extras/web-components) [Animation Techniques](https://vuejs.org/guide/extras/animation)

[Get Security Updates for Vue 2](https://www.herodevs.com/support/nes-vue?utm_source=vuejs_org&utm_medium=sidebar_link&utm_campaign=vue2eol)

On this page

Table of Contents for current page

- [Typing Component Props](https://vuejs.org/guide/typescript/composition-api#typing-component-props)
- [Typing Component Emits](https://vuejs.org/guide/typescript/composition-api#typing-component-emits)
- [Typing ref()](https://vuejs.org/guide/typescript/composition-api#typing-ref)
- [Typing reactive()](https://vuejs.org/guide/typescript/composition-api#typing-reactive)
- [Typing computed()](https://vuejs.org/guide/typescript/composition-api#typing-computed)
- [Typing Event Handlers](https://vuejs.org/guide/typescript/composition-api#typing-event-handlers)
- [Typing Provide / Inject](https://vuejs.org/guide/typescript/composition-api#typing-provide-inject)
- [Typing Template Refs](https://vuejs.org/guide/typescript/composition-api#typing-template-refs)
- [Typing Component Template Refs](https://vuejs.org/guide/typescript/composition-api#typing-component-template-refs)
- [Typing Global Custom Directives](https://vuejs.org/guide/typescript/composition-api#typing-global-custom-directives)

[Sponsors](https://vuejs.org/sponsor/)

[Inquire about Special Sponsorship](https://vuejs.org/sponsor/#tier-benefits)

[![VueMastery](https://automation.vuejs.org/images/vuemastery.png)](https://www.vuemastery.com/)[![Vehikl](https://automation.vuejs.org/images/vehikl.png)](https://vehikl.com/)[![Vue.js Amsterdam](https://automation.vuejs.org/images/vue_js_amsterdam.png)](https://vuejs.amsterdam/)[![Storyblok](https://automation.vuejs.org/images/storyblok.png)](https://www.storyblok.com/)[![Chrome Frameworks Fund](https://automation.vuejs.org/images/chrome_frameworks_fund.png)](https://opencollective.com/2021-frameworks-fund)[![HeroDevs](https://automation.vuejs.org/images/herodevs.png)](https://www.herodevs.com/support/vue)[![JavaScript Certification](https://automation.vuejs.org/images/javascript_certification.png?v2)](https://certificates.dev/javascript/?ref=vuejs-sponsor&friend=VUEJS)[![CodeRabbit ](https://automation.vuejs.org/images/coderabbit_.png)](https://www.coderabbit.ai/?utm_source=github&utm_medium=sponsors&utm_campaign=evan_you_2025)[![ImageKit.io](https://automation.vuejs.org/images/imagekit_io.svg)](https://imagekit.io/?utm_source=vuejs&utm_medium=referral&utm_campaign=oss-sponsorship&utm_content=homepage)[![Greptile](https://automation.vuejs.org/images/greptile.png)](https://www.greptile.com/?utm_source=vuejs&utm_medium=sponsorship&utm_campaign=vue_sponsor_page)[Become a Sponsor](https://vuejs.org/sponsor/)

# TypeScript with Composition API [​](https://vuejs.org/guide/typescript/composition-api\#typescript-with-composition-api)

[Watch an interactive video lesson on Scrimba](https://scrimba.com/links/vue-ts-composition-api "Free Vue.js TypeScript with Composition API Lesson")

> This page assumes you've already read the overview on [Using Vue with TypeScript](https://vuejs.org/guide/typescript/overview).

## Typing Component Props [​](https://vuejs.org/guide/typescript/composition-api\#typing-component-props)

### Using `<script setup>` [​](https://vuejs.org/guide/typescript/composition-api\#using-script-setup)

When using `<script setup>`, the `defineProps()` macro supports inferring the props types based on its argument:

vue

```
<script setup lang="ts">
const props = defineProps({
  foo: { type: String, required: true },
  bar: Number
})

props.foo // string
props.bar // number | undefined
</script>
```

This is called "runtime declaration", because the argument passed to `defineProps()` will be used as the runtime `props` option.

However, it is usually more straightforward to define props with pure types via a generic type argument:

vue

```
<script setup lang="ts">
const props = defineProps<{
  foo: string
  bar?: number
}>()
</script>
```

This is called "type-based declaration". The compiler will try to do its best to infer the equivalent runtime options based on the type argument. In this case, our second example compiles into the exact same runtime options as the first example.

You can use either type-based declaration OR runtime declaration, but you cannot use both at the same time.

We can also move the props types into a separate interface:

vue

```
<script setup lang="ts">
interface Props {
  foo: string
  bar?: number
}

const props = defineProps<Props>()
</script>
```

This also works if `Props` is imported from an external source. This feature requires TypeScript to be a peer dependency of Vue.

vue

```
<script setup lang="ts">
import type { Props } from './foo'

const props = defineProps<Props>()
</script>
```

#### Syntax Limitations [​](https://vuejs.org/guide/typescript/composition-api\#syntax-limitations)

In version 3.2 and below, the generic type parameter for `defineProps()` were limited to a type literal or a reference to a local interface.

This limitation has been resolved in 3.3. The latest version of Vue supports referencing imported and a limited set of complex types in the type parameter position. However, because the type to runtime conversion is still AST-based, some complex types that require actual type analysis, e.g. conditional types, are not supported. You can use conditional types for the type of a single prop, but not the entire props object.

### Props Default Values [​](https://vuejs.org/guide/typescript/composition-api\#props-default-values)

When using type-based declaration, we lose the ability to declare default values for the props. This can be resolved by using [Reactive Props Destructure](https://vuejs.org/guide/components/props#reactive-props-destructure):

ts

```
interface Props {
  msg?: string
  labels?: string[]
}

const { msg = 'hello', labels = ['one', 'two'] } = defineProps<Props>()
```

In 3.4 and below, Reactive Props Destructure is not enabled by default. An alternative is to use the `withDefaults` compiler macro:

ts

```
interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})
```

This will be compiled to equivalent runtime props `default` options. In addition, the `withDefaults` helper provides type checks for the default values, and ensures the returned `props` type has the optional flags removed for properties that do have default values declared.

INFO

Note that default values for mutable reference types (like arrays or objects) should be wrapped in functions when using `withDefaults` to avoid accidental modification and external side effects. This ensures each component instance gets its own copy of the default value. This is **not** necessary when using default values with destructure.

### Without `<script setup>` [​](https://vuejs.org/guide/typescript/composition-api\#without-script-setup)

If not using `<script setup>`, it is necessary to use `defineComponent()` to enable props type inference. The type of the props object passed to `setup()` is inferred from the `props` option.

ts

```
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    message: String
  },
  setup(props) {
    props.message // <-- type: string
  }
})
```

### Complex prop types [​](https://vuejs.org/guide/typescript/composition-api\#complex-prop-types)

With type-based declaration, a prop can use a complex type much like any other type:

vue

```
<script setup lang="ts">
interface Book {
  title: string
  author: string
  year: number
}

const props = defineProps<{
  book: Book
}>()
</script>
```

For runtime declaration, we can use the `PropType` utility type:

ts

```
import type { PropType } from 'vue'

const props = defineProps({
  book: Object as PropType<Book>
})
```

This works in much the same way if we're specifying the `props` option directly:

ts

```
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  props: {
    book: Object as PropType<Book>
  }
})
```

The `props` option is more commonly used with the Options API, so you'll find more detailed examples in the guide to [TypeScript with Options API](https://vuejs.org/guide/typescript/options-api#typing-component-props). The techniques shown in those examples also apply to runtime declarations using `defineProps()`.

## Typing Component Emits [​](https://vuejs.org/guide/typescript/composition-api\#typing-component-emits)

In `<script setup>`, the `emit` function can also be typed using either runtime declaration OR type declaration:

vue

```
<script setup lang="ts">
// runtime
const emit = defineEmits(['change', 'update'])

// options based
const emit = defineEmits({
  change: (id: number) => {
    // return `true` or `false` to indicate
    // validation pass / fail
  },
  update: (value: string) => {
    // return `true` or `false` to indicate
    // validation pass / fail
  }
})

// type-based
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()

// 3.3+: alternative, more succinct syntax
const emit = defineEmits<{
  change: [id: number]
  update: [value: string]
}>()
</script>
```

The type argument can be one of the following:

1. A callable function type, but written as a type literal with [Call Signatures](https://www.typescriptlang.org/docs/handbook/2/functions.html#call-signatures). It will be used as the type of the returned `emit` function.
2. A type literal where the keys are the event names, and values are array / tuple types representing the additional accepted parameters for the event. The example above is using named tuples so each argument can have an explicit name.

As we can see, the type declaration gives us much finer-grained control over the type constraints of emitted events.

When not using `<script setup>`, `defineComponent()` is able to infer the allowed events for the `emit` function exposed on the setup context:

ts

```
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['change'],
  setup(props, { emit }) {
    emit('change') // <-- type check / auto-completion
  }
})
```

## Typing `ref()` [​](https://vuejs.org/guide/typescript/composition-api\#typing-ref)

Refs infer the type from the initial value:

ts

```
import { ref } from 'vue'

// inferred type: Ref<number>
const year = ref(2020)

// => TS Error: Type 'string' is not assignable to type 'number'.
year.value = '2020'
```

Sometimes we may need to specify complex types for a ref's inner value. We can do that by using the `Ref` type:

ts

```
import { ref } from 'vue'
import type { Ref } from 'vue'

const year: Ref<string | number> = ref('2020')

year.value = 2020 // ok!
```

Or, by passing a generic argument when calling `ref()` to override the default inference:

ts

```
// resulting type: Ref<string | number>
const year = ref<string | number>('2020')

year.value = 2020 // ok!
```

If you specify a generic type argument but omit the initial value, the resulting type will be a union type that includes `undefined`:

ts

```
// inferred type: Ref<number | undefined>
const n = ref<number>()
```

## Typing `reactive()` [​](https://vuejs.org/guide/typescript/composition-api\#typing-reactive)

`reactive()` also implicitly infers the type from its argument:

ts

```
import { reactive } from 'vue'

// inferred type: { title: string }
const book = reactive({ title: 'Vue 3 Guide' })
```

To explicitly type a `reactive` property, we can use interfaces:

ts

```
import { reactive } from 'vue'

interface Book {
  title: string
  year?: number
}

const book: Book = reactive({ title: 'Vue 3 Guide' })
```

TIP

It's not recommended to use the generic argument of `reactive()` because the returned type, which handles nested ref unwrapping, is different from the generic argument type.

## Typing `computed()` [​](https://vuejs.org/guide/typescript/composition-api\#typing-computed)

`computed()` infers its type based on the getter's return value:

ts

```
import { ref, computed } from 'vue'

const count = ref(0)

// inferred type: ComputedRef<number>
const double = computed(() => count.value * 2)

// => TS Error: Property 'split' does not exist on type 'number'
const result = double.value.split('')
```

You can also specify an explicit type via a generic argument:

ts

```
const double = computed<number>(() => {
  // type error if this doesn't return a number
})
```

## Typing Event Handlers [​](https://vuejs.org/guide/typescript/composition-api\#typing-event-handlers)

When dealing with native DOM events, it might be useful to type the argument we pass to the handler correctly. Let's take a look at this example:

vue

```
<script setup lang="ts">
function handleChange(event) {
  // `event` implicitly has `any` type
  console.log(event.target.value)
}
</script>

<template>
  <input type="text" @change="handleChange" />
</template>
```

Without type annotation, the `event` argument will implicitly have a type of `any`. This will also result in a TS error if `"strict": true` or `"noImplicitAny": true` are used in `tsconfig.json`. It is therefore recommended to explicitly annotate the argument of event handlers. In addition, you may need to use type assertions when accessing the properties of `event`:

ts

```
function handleChange(event: Event) {
  console.log((event.target as HTMLInputElement).value)
}
```

## Typing Provide / Inject [​](https://vuejs.org/guide/typescript/composition-api\#typing-provide-inject)

Provide and inject are usually performed in separate components. To properly type injected values, Vue provides an `InjectionKey` interface, which is a generic type that extends `Symbol`. It can be used to sync the type of the injected value between the provider and the consumer:

ts

```
import { provide, inject } from 'vue'
import type { InjectionKey } from 'vue'

const key = Symbol() as InjectionKey<string>

provide(key, 'foo') // providing non-string value will result in error

const foo = inject(key) // type of foo: string | undefined
```

It's recommended to place the injection key in a separate file so that it can be imported in multiple components.

When using string injection keys, the type of the injected value will be `unknown`, and needs to be explicitly declared via a generic type argument:

ts

```
const foo = inject<string>('foo') // type: string | undefined
```

Notice the injected value can still be `undefined`, because there is no guarantee that a provider will provide this value at runtime.

The `undefined` type can be removed by providing a default value:

ts

```
const foo = inject<string>('foo', 'bar') // type: string
```

If you are sure that the value is always provided, you can also force cast the value:

ts

```
const foo = inject('foo') as string
```

## Typing Template Refs [​](https://vuejs.org/guide/typescript/composition-api\#typing-template-refs)

With Vue 3.5 and `@vue/language-tools` 2.1 (powering both the IDE language service and `vue-tsc`), the type of refs created by `useTemplateRef()` in SFCs can be **automatically inferred** for static refs based on what element the matching `ref` attribute is used on.

In cases where auto-inference is not possible, you can still cast the template ref to an explicit type via the generic argument:

ts

```
const el = useTemplateRef<HTMLInputElement>('el')
```

Usage before 3.5

Template refs should be created with an explicit generic type argument and an initial value of `null`:

vue

```
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const el = ref<HTMLInputElement | null>(null)

onMounted(() => {
  el.value?.focus()
})
</script>

<template>
  <input ref="el" />
</template>
```

To get the right DOM interface you can check pages like [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#technical_summary).

Note that for strict type safety, it is necessary to use optional chaining or type guards when accessing `el.value`. This is because the initial ref value is `null` until the component is mounted, and it can also be set to `null` if the referenced element is unmounted by `v-if`.

## Typing Component Template Refs [​](https://vuejs.org/guide/typescript/composition-api\#typing-component-template-refs)

With Vue 3.5 and `@vue/language-tools` 2.1 (powering both the IDE language service and `vue-tsc`), the type of refs created by `useTemplateRef()` in SFCs can be **automatically inferred** for static refs based on what element or component the matching `ref` attribute is used on.

In cases where auto-inference is not possible (e.g. non-SFC usage or dynamic components), you can still cast the template ref to an explicit type via the generic argument.

In order to get the instance type of an imported component, we need to first get its type via `typeof`, then use TypeScript's built-in `InstanceType` utility to extract its instance type:

App.vue

vue

```
<script setup lang="ts">
import { useTemplateRef } from 'vue'
import Foo from './Foo.vue'
import Bar from './Bar.vue'

type FooType = InstanceType<typeof Foo>
type BarType = InstanceType<typeof Bar>

const compRef = useTemplateRef<FooType | BarType>('comp')
</script>

<template>
  <component :is="Math.random() > 0.5 ? Foo : Bar" ref="comp" />
</template>
```

In cases where the exact type of the component isn't available or isn't important, `ComponentPublicInstance` can be used instead. This will only include properties that are shared by all components, such as `$el`:

ts

```
import { useTemplateRef } from 'vue'
import type { ComponentPublicInstance } from 'vue'

const child = useTemplateRef<ComponentPublicInstance>('child')
```

In cases where the component referenced is a [generic component](https://vuejs.org/guide/typescript/overview#generic-components), for instance `MyGenericModal`:

MyGenericModal.vue

vue

```
<script setup lang="ts" generic="ContentType extends string | number">
import { ref } from 'vue'

const content = ref<ContentType | null>(null)

const open = (newContent: ContentType) => (content.value = newContent)

defineExpose({
  open
})
</script>
```

It needs to be referenced using `ComponentExposed` from the [`vue-component-type-helpers`](https://www.npmjs.com/package/vue-component-type-helpers) library as `InstanceType` won't work.

App.vue

vue

```
<script setup lang="ts">
import { useTemplateRef } from 'vue'
import MyGenericModal from './MyGenericModal.vue'
import type { ComponentExposed } from 'vue-component-type-helpers'

const modal =
  useTemplateRef<ComponentExposed<typeof MyGenericModal>>('modal')

const openModal = () => {
  modal.value?.open('newValue')
}
</script>
```

Note that with `@vue/language-tools` 2.1+, static template refs' types can be automatically inferred and the above is only needed in edge cases.

## Typing Global Custom Directives [​](https://vuejs.org/guide/typescript/composition-api\#typing-global-custom-directives)

In order to get type hints and type checking for global custom directives declared with `app.directive()`, you can extend `ComponentCustomProperties`

src/directives/highlight.ts

ts

```
import type { Directive } from 'vue'

export type HighlightDirective = Directive<HTMLElement, string>

declare module 'vue' {
  export interface ComponentCustomProperties {
    // prefix with v (v-highlight)
    vHighlight: HighlightDirective
  }
}

export default {
  mounted: (el, binding) => {
    el.style.backgroundColor = binding.value
  }
} satisfies HighlightDirective
```

main.ts

ts

```
import highlight from './directives/highlight'
// ...other code
const app = createApp(App)
app.directive('highlight', highlight)
```

Usage in component

App.vue

vue

```
<template>
  <p v-highlight="'blue'">This sentence is important!</p>
</template>
```

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/typescript/composition-api.md)

[PreviousOverview](https://vuejs.org/guide/typescript/overview) [Next TS with Options API](https://vuejs.org/guide/typescript/options-api)

TypeScript with Composition API has loaded