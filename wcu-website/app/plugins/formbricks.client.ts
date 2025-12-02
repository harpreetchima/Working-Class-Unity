import formbricks from "@formbricks/js";

export default defineNuxtPlugin(async () => {
  // Only initialize on client side
  if (typeof window !== "undefined") {
    await formbricks.setup({
      environmentId: "cminsehli0009o8015hjuzkuz",
      appUrl: "https://form.workingclassunity.com",
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
