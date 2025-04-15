import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

interface CalEmbedProps {
  formName: string;
  formEmail: string;
  formBudget?: string;
  formTimeline?: string;
  formProjectType?: string;
  formProjectOverview?: string;
}

export default function CalEmbed({
  formName,
  formEmail,
  formBudget,
  formTimeline,
  formProjectType,
  formProjectOverview,
}: CalEmbedProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("preload", { calLink: "ssh-tech/30min" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        styles: {
          body: { background: "#091F2C" },
          eventTypeListItem: { background: "#091F2C" },
        },
        cssVarsPerTheme: {
          light: {
            "cal-bg": "#FFFFFF",
            "cal-bg-neutral": "#F5F5F5",
            "cal-text": "#003330",
            "cal-text-subtle": "#067F71",
            "cal-border": "#07DFC1",
            "cal-brand": "#07DFC1",
            "cal-brand-subtle": "#1FE2C4",
            "cal-brand-accent": "#003330",
          },
          dark: {
            "cal-bg": "#091F2C",
            "cal-bg-neutral": "#0E534C",
            "cal-text": "#EFFEEB",
            "cal-text-subtle": "#91FEE6",
            "cal-text-muted": "#52F6D7",
            "cal-border": "#067F71",
            "cal-border-default": "#029F8C",
            "cal-border-subtle": "#0B645C",
            "cal-border-booker": "#1FE2C4",
            "cal-border-booker-width": "1px",
            "cal-brand": "#07DFC1",
            "cal-brand-subtle": "#1FE2C4",
            "cal-brand-accent": "#003330",
            "cal-text-emphasis": "#EFFEEB",
            "cal-border-emphasis": "#07DFC1",
            "cal-text-error": "#FF6B6B",
            "cal-bg-emphasis": "#0B645C",
          },
        },
      });
    })();
  }, [
    formName,
    formEmail,
    formBudget,
    formTimeline,
    formProjectType,
    formProjectOverview,
  ]);

  return (
    <Cal
      namespace="30min"
      calLink="ssh-tech/30min"
      style={{ width: "100%", height: "100%", border: "none" }}
      config={{
        layout: "month_view",
        theme: "dark",
        name: formName,
        email: formEmail,
        budget: formBudget ?? "",
        timeline: formTimeline ?? "",
        projectType: formProjectType ?? "",
        notes: formProjectOverview ?? "",
      }}
    />
  );
}
