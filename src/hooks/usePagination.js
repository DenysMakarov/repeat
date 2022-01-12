import {useMemo} from "react";

export const usePagination = (totalPage) => {
    const getPagers = useMemo(() => {
        let result = [];
        for (let i = 0; i < totalPage; i++) {
            result.push(i + 1)
        }
        return result
        }, [totalPage]
    )
    return getPagers
}

