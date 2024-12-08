// Navigation types
export interface NavLink {
  name: string;
  href: string;
}

// Social platform types
export interface SocialPlatform {
  name: string;
  logo: string;
  url: string;
}

// Animation variants types
export interface AnimationVariant {
  initial: object;
  animate: object;
  transition?: object;
}

// Feature types
export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Message {
  id: number;
  text: string;
  sender: "user" | "bot" | "customer-care";
}