export interface UseCase<T, K> {
    execute(params: T): Promise<K>;
}
