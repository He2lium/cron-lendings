export interface Image {
  _id: string;
  key: string;
  purpose: 'basic' | 'avatar';
  createdAt: string;
  updatedAt: string;
  variants: 'full' | 'icon' | 'sl' | 'sm' | 'md' | 'lg' | 'xl';
  _paths: {
    full?: string;
    icon?: string;
    sl?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
}
