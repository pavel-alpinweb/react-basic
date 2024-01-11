import React, {useMemo} from 'react';
import MyButton from "../button/MyButton";
import classes from "./MyPagination.module.css";

const MyPagination = ({totalPages, page, setPage}) => {
    const pagesArray = useMemo(() => {
        let pages = [];
        for (let i = 0; i < totalPages; i++) {
            pages.push(i + 1);
        }
        return pages
    }, [totalPages]);

    return (
        <div className={classes.pagination}>
            {pagesArray.map(p =>
                <MyButton
                    key={p}
                    active={page === p}
                    onClick={() => setPage(p)}
                >
                    {p}
                </MyButton>
            )}
        </div>
    );
};

export default MyPagination;