export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
}