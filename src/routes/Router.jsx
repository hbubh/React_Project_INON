import { Routes, Route } from "react-router-dom";
import ROUTES from "./ROUTES";
import NavCards from "../pages/CradSMedia/HomeCardPage";
import RegisterPage from "../pages/login/RegisterPage";
import LoginPage from "../pages/login/LoginPage";
import CreateCard from "../pages/CradSMedia/CreateComponent";
import ChangeContent from "../pages/CradSMedia/EditComponent";
import UsersFunc from "../pages/UsersPages/TirgulFilter2609";
import EdenHello from "../pages/UsersPages/HiEden";
import InonHello from "../pages/UsersPages/HiInon";
import ShaniHello from "../pages/UsersPages/HiShani";
import ElishevaHello from "../pages/UsersPages/HiElisheva";
import ErrorComponent from "../layout/main/ErrorPage";
import HomeWork from "../Tirgulim/homeWork/MissionHW2310/HW2310";
import ArrUsers from "../Tirgulim/homeWork/MissionHW2310/HW2310ArrComponent";
import UserPage from "../Tirgulim/homeWork/MissionHW2310/UserPage";
import CounterActionsPage from "../playGround/CounterActionsPage";
import CounterDisplay from "../playGround/CounterDisplay";
import EditTirgulParam from "../Tirgulim/TitgulUsePatrams/TirgulEditCardParam";
import AuthGuard from "../Guard/AuthGuard";
import BizzGuard from "../Guard/BizGuard";
import MyCardBiz from "../pages/CradSMedia/MyCardsBiz";
import LikedCard from "../pages/CradSMedia/LikedCard";
import Profile from "../pages/CradSMedia/Profile";
import AboutComponent from "../pages/CradSMedia/AboutComponent";
import Admin from "../pages/CradSMedia/Admin";
import AdminGuard from "../Guard/AdminGuard";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<NavCards />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutComponent />} />

      <Route
        path={ROUTES.ADMIN}
        element={
          <AuthGuard>
            <AdminGuard>
              <Admin />
            </AdminGuard>
          </AuthGuard>
        }
      />
      <Route
        path={ROUTES.LIKED}
        element={
          <AuthGuard>
            <LikedCard />
          </AuthGuard>
        }
      />

      <Route
        path={ROUTES.MYCARDS}
        element={
          <AuthGuard>
            <BizzGuard>
              <MyCardBiz />{" "}
            </BizzGuard>
          </AuthGuard>
        }
      />

      <Route
        path={ROUTES.CREATE}
        element={
          <AuthGuard>
            <BizzGuard>
              <CreateCard />
            </BizzGuard>
          </AuthGuard>
        }
      />
      <Route
        path={`${ROUTES.EDIT}/:_id`}
        element={
          <AuthGuard>
            <BizzGuard>
              <ChangeContent />
            </BizzGuard>
          </AuthGuard>
        }
      />
      <Route
        path={ROUTES.PROFILE}
        element={
          <AuthGuard>
            <Profile />
          </AuthGuard>
        }
      />
      <Route path={ROUTES.USERS} element={<UsersFunc />} />
      <Route path={ROUTES.HIEDEN} element={<EdenHello />} />
      <Route path={ROUTES.HIINON} element={<InonHello />} />
      <Route path={ROUTES.HISHANI} element={<ShaniHello />} />
      <Route path={ROUTES.HIELISHEVA} element={<ElishevaHello />} />
      <Route path={`${ROUTES.EDITPARAM}/:id`} element={<EditTirgulParam />} />
      <Route path={ROUTES.HOMEWORK} element={<HomeWork />}>
        <Route path={ROUTES.ARRHW} element={<ArrUsers />} />
        <Route path={`${ROUTES.ARRHW}/:user`} element={<UserPage />} />
      </Route>
      <Route path="/reduxTest" element={<CounterDisplay />}>
        <Route path="calc" element={<CounterActionsPage />} />
      </Route>
      <Route path="*" element={<ErrorComponent />} />
    </Routes>
  );
};
export default Router;
