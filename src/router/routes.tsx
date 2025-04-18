import { createElement } from "react";
import { Info, Home, MessageCircle, Heart, ChartArea, Settings } from "lucide-react";
import { ErrorPage } from "@/pages/ErrorPage";
import { HomePage } from "@/pages/HomePage";
import { MessageGenerator } from "@/pages/MessageGenerator";
import { FavoritePage } from "@/pages/FavoritePage";
import { StatsPage } from "@/pages/StatsPage";
import { SettingsPage } from "@/pages/SettingsPage";
import { useTranslation } from "react-i18next";

export const routes = () => {
  const { t } = useTranslation();

  return [
    {
      id: 0,
      role: null,
      view: false,
      path: "*",
      name: t("pages.error.name"),
      component: ErrorPage,
      icon: createElement(Info),
    },
    {
      id: 1,
      role: null,
      view: true,
      path: "/",
      name: t("pages.home.name"),
      component: HomePage,
      icon: createElement(Home),
    },
    {
      id: 2,
      role: null,
      view: true,
      path: "/generator",
      name: t("pages.generator.name"),
      component: MessageGenerator,
      icon: createElement(MessageCircle),
    },
    {
      id: 3,
      role: null,
      view: true,
      path: "/favorite",
      name: t("pages.favorite.name"),
      component: FavoritePage,
      icon: createElement(Heart),
    },
    {
      id: 4,
      role: null,
      view: true,
      path: "/stats",
      name: t("pages.stats.name"),
      component: StatsPage,
      icon: createElement(ChartArea),
    },
    {
      id: 5,
      role: null,
      view: false,
      path: "/settings",
      name: t("pages.settings.name"),
      component: SettingsPage,
      icon: createElement(Settings),
    },
  ] as const;
};
