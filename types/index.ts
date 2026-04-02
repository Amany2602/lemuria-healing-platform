export type User = {
    id: string;
    email: string;
    first_name?: string;
    last_name?: string;
    created_at: string;
};

export type Service = {
    id: string;
    name?: string;
    title?: string;
    description: string;
    price: number;
    duration_minutes: number;
};

export type Workshop = {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    capacity: number;
    total_slots: number;
    price: number;
};

export type Booking = {
    id: string;
    user_id: string;
    service_id?: string;
    workshop_id?: string;
    status: 'pending' | 'confirmed' | 'cancelled';
    amount: number;
    stripe_payment_id?: string;
    created_at: string;
};

export type Testimonial = {
    id: string;
    name: string;
    testimonial: string;
    rating: number;
    status: string;
    created_at: string;
};
