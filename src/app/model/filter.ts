export class Filter {
    content: Content[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    first: boolean;
    sort: Sort2;
    size: number;
    number: number;
    numberOfElements: number;
    empty: boolean;
}

export class Content {
    id: number;
    year: number;
    title: string;
    studios: string[];
    producers: string[];
    winner: boolean;
}

export class Sort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}

export class Pageable {
    sort: Sort;
    pageSize: number;
    pageNumber: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
}

export class Sort2 {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}
