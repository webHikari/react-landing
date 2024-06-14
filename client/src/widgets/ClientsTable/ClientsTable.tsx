import {
    Column,
    useTable,
    useGlobalFilter,
    useSortBy,
    usePagination,
} from "react-table";
import React, { useState } from "react";
import {
    FaSortUp,
    FaSortDown,
    FaSort,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";
import styles from "./ui/ClientsTable.module.css";
import Input from "@shared/Input/Input";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "@shared/Button/Button";

interface ClientData {
    id: number;
    clientName: string;
    clientAddress: string;
}

const ProjectsTable = ({ clients }: { clients: ClientData[] }) => {
    const [globalFilterValue, setGlobalFilterValue] = useState("");

    const columns: Column<ClientData>[] = React.useMemo(
        () => [
            {
                Header: "Клиент",
                accessor: "clientName",
                sortType: "basic",
            },
            {
                Header: "Адрес",
                accessor: "clientAddress",
                sortType: "basic",
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state: { pageIndex, sortBy },
        prepareRow,
        setGlobalFilter,
        setSortBy,
    } = useTable<ClientData>(
        { columns, data: clients },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const handleSearch = (value: string) => {
        setGlobalFilterValue(value);
        setGlobalFilter(value);
    };

    const handleSort = (columnId: string) => {
        const isSortedDesc = sortBy.some(
            (sort) => sort.id === columnId && sort.desc
        );
        setSortBy([{ id: columnId, desc: !isSortedDesc }]);
    };

    return (
        <div className={styles.TableContainer}>
            <div className={styles.TableHead}>
                <Link to="/clients/create">
                    <Button styleType="Button3" value="Добавить клиента">
                        <FaPlus />
                        Добавить клиента
                    </Button>
                </Link>
                <div className={styles.SearchContainer}>
                    <Input
                        type="text"
                        styleType="Input3"
                        placeholderValue="Поиск..."
                        value={globalFilterValue}
                        onChange={handleSearch}
                    />
                </div>
                <div className={styles.PaginationContainer}>
                    <button
                        className={styles.PaginationButton}
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                    >
                        <FaChevronLeft />
                    </button>
                    <div className={styles.PaginationCounter}>
                        <span>
                            Страница{" "}
                            <strong>
                                {pageIndex + 1} из {pageOptions.length}
                            </strong>
                        </span>
                    </div>
                    <button
                        className={styles.PaginationButton}
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
            <table className={styles.Table} {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps(
                                        column.getSortByToggleProps()
                                    )}
                                    className={styles.SortableHeader}
                                    onClick={() => handleSort(column.id)}
                                >
                                    {column.render("Header")}
                                    {sortBy.some(
                                        (sort) =>
                                            sort.id === column.id && sort.desc
                                    ) ? (
                                        <FaSortDown
                                            className={styles.SortIcon}
                                        />
                                    ) : sortBy.some(
                                          (sort) =>
                                              sort.id === column.id &&
                                              !sort.desc
                                      ) ? (
                                        <FaSortUp className={styles.SortIcon} />
                                    ) : (
                                        <FaSort className={styles.SortIcon} />
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    if (cell.column.id === "clientName") {
                                        return (
                                            <td {...cell.getCellProps()}>
                                                <Link
                                                    to={`/clients/edit/${row.id}`}
                                                >
                                                    {cell.value}
                                                </Link>
                                            </td>
                                        );
                                    } else {
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {cell.render("Cell")}
                                            </td>
                                        );
                                    }
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectsTable;
