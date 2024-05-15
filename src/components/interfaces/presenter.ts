export interface Presenter<T, K> {
    format(item: T): K;
}
