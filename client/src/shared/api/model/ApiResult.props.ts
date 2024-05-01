export interface ApiResultProps<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
    success: boolean;
}