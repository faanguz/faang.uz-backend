export interface CreateUserPayloadDto {
    first_name: string;
    last_name: string;
    phone_number: string;
}

export interface CreateUserResponseDto {
    user: {
        id: string;
        first_name: string;
        last_name: string;
        phone_number: string;
    } | null;
}
