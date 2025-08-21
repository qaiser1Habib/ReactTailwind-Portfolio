export interface Project {
    title: string;
    description: string;
    features: string[];
    icon: string;
    gradient: string;
    tech: {
        name: string;
        color: string;
    }[];
    link: string;
}