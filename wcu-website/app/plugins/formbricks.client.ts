import formbricks from "@formbricks/js";

export default defineNuxtPlugin(async () => {
  // Only initialize on client side
  if (typeof window !== "undefined") {
    const config = useRuntimeConfig();
    await formbricks.setup({
      environmentId: config.public.formbricksEnvironmentId,
      appUrl: config.public.formbricksAppUrl,
    });
  }

  // Get the router to register route changes
  const router = useRouter();

  // Register route changes for Formbricks survey targeting
  router.afterEach(() => {
    if (typeof window !== "undefined" && typeof formbricks !== "undefined") {
      formbricks.registerRouteChange();
    }
  });
});
