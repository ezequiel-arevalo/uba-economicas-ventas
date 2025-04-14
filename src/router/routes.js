import { Info, Home, MessageCircle, Heart } from "lucide-react";
import { createElement } from "react";
import { ErrorPage } from "@/pages/ErrorPage";
import { HomePage } from "@/pages/HomePage";
import { MessageGenerator } from "@/pages/MessageGenerator";
import { FavoritePage } from "@/pages/FavoritePage";

export const routes = [
  {
    id: 0,
    role: null,
    view: false,
    path: "*",
    name: "Error",
    component: ErrorPage,
    icon: createElement(Info),
  },
  { 
    id: 1, 
    role: null, 
    view: true, 
    path: '/', 
    name: 'Dashboard', 
    component: HomePage, 
    icon: createElement(Home)
  },
  { 
    id: 2, 
    role: null, 
    view: true, 
    path: '/generator', 
    name: 'Messages', 
    component: MessageGenerator, 
    icon: createElement(MessageCircle)
  },
  { 
    id: 3, 
    role: null, 
    view: true, 
    path: '/favorite', 
    name: 'Favorite', 
    component: FavoritePage, 
    icon: createElement(Heart)
  },
];
