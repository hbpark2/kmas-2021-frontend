import Pagination from "react-js-pagination";
import styled from "styled-components";

const Container = styled.div`
	.pagination {
		display: flex;
		justify-content: center;
		margin-top: 15px;
	}
	ul {
		list-style: none;
		padding: 0;
	}

	ul.pagination li {
		display: inline-block;
		width: 30px;
		height: 30px;
		border: 1px solid #e2e2e2;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1rem;

		transition: all 0.5s;
	}

	ul.pagination li:first-child {
		border-radius: 5px 0 0 5px;
	}

	ul.pagination li:last-child {
		border-radius: 0 5px 5px 0;
	}

	ul.pagination li a {
		text-decoration: none;
		color: #337ab7;
		font-size: 1rem;
		transition: all 0.5s;
	}

	ul.pagination li.active a {
		color: #fff;
	}

	ul.pagination li.active {
		background-color: #337ab7;
	}

	ul.pagination li a:hover,
	ul.pagination li a.active {
		background-color: #337ab7;
		color: #fff;
	}

	.page-selection {
		width: 48px;
		height: 30px;
		color: #337ab7;
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
`;

interface PagenationProps {
	page: number;
	page_size: number;
	total_count: number;
	on_change: (T: number) => void;
}

const CustomPagination: React.FC<PagenationProps> = ({
	page,
	page_size,
	total_count,
	on_change,
}) => {
	return (
		<Container>
			<Pagination
				activePage={page}
				itemsCountPerPage={page_size}
				totalItemsCount={total_count || 0}
				pageRangeDisplayed={5}
				prevPageText={"<"}
				nextPageText={">"}
				onChange={on_change}
				hideFirstLastPages={true}
			/>
		</Container>
	);
};

export default CustomPagination;
