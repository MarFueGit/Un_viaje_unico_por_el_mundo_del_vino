import { useEffect, useState } from "react";
import imgVino from "../../assets/img/img4.jpg";
import "./Home.css";
import { getWinesService } from "../../services/wines.service";
import { IResponseWines } from "../../types/Wine";
import Products from "../../components/Products";
import Pagination from "../../components/Pagination";
import Categories from "../../components/Categories";
import { IWineState, wineStore } from "../../state/wineStore";
import Footer from "../../components/Footer";
import useToken from "../../hooks/useToken";

function Home() {
  const wines = wineStore((state: IWineState) => state.wines.data);
  const setWines = wineStore((state) => state.setWines);
  const nextPage = wineStore((state) => state.wines.nextPage);
  const prevPage = wineStore((state) => state.wines.prevPage);
  const [page, setPage] = useState<number | null>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const { getToken } = useToken();
  const searching = wineStore((state) => state.searching);

  useEffect(() => {
    getWinesService(page, pageSize, String(getToken()))
      .then((response: IResponseWines) => setWines(response?.response))
      .catch((error) => console.error(error));
  }, [page, pageSize]);

  const getTitleProducts = () => {
    if (wines?.length === 0) {
      return "No se encontraron vinos";
    } else if (searching) {
      return "Buscando ...";
    } else {
      return "ESCOGE TU VINO FAVORITO";
    }
  };

  return (
    <main>
      <section className="section_home">
        <h2 className="title">UN VIAJE ÚNICO POR EL MUNDO DEL VINO</h2>
        <img src={imgVino} alt="imagen vino" />
      </section>
      <Products data={wines || []} titleProducts={getTitleProducts()} />
      <Pagination
        page={page}
        pageSize={pageSize}
        onChangePageSize={(page: number) => setPageSize(page)}
        onNext={() => setPage(nextPage)}
        onBack={() => setPage(prevPage)}
        disabledBack={prevPage === null}
        disabledNext={nextPage === null}
      />
      <hr />
      <Categories />
      <Footer />
    </main>
  );
}

export default Home;
