import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectAllCreators,
  selectAllCreatorsNextPage,
  selectAllCreatorsPrevPage,
  selectAllCreatorsStatus,
} from "../../redux/store/creatorSlice";
import { useEffect, useState } from "react";
import { fetchAsyncCreators } from "../../redux/utils/creatorUtils";
import { Pagination, Preloader, Title } from "../../components/common";
import { STATUS } from "../../utils/status";
import { CreatorList } from "../../components/creator";

const CreatorAllPage = () => {
  const dispatch = useDispatch();
  const creators = useSelector(selectAllCreators);
  const creatorsStatus = useSelector(selectAllCreatorsStatus);
  const nextPage = useSelector(selectAllCreatorsNextPage);
  const prevPage = useSelector(selectAllCreatorsPrevPage);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAsyncCreators(page));
  }, [page]);

  const pageHandler = (pageValue) => setPage(pageValue);

  return (
    <CreatorAllPageWrapper>
      <div className="sc-creators section">
        <div className="container">
          <Title
            titleName={{
              firstText: "Los",
              secondText: "Creadores",
            }}
          />
          
          {creatorsStatus === STATUS.LOADING ? (
            <Preloader />
          ) : creators?.length > 0 ? (
            <>
              <CreatorList creators={creators} />
              <Pagination
                pageHandler={pageHandler}
                nextPage={nextPage}
                prevPage={prevPage}
                currentPage={page}
              />
            </>
          ) : (
            <p className="text-white lead-text text-center">
              No se ha encontrado ningún creador. Prueba de nuevo más tarde.
            </p>
          )}
        </div>
      </div>
    </CreatorAllPageWrapper>
  );
};

export default CreatorAllPage;

const CreatorAllPageWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);
  .sc-creators {
    min-height: 100vh;
    padding-top: 65px;
  }
`;
