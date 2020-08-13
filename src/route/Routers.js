import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutAdmin from '../pages/layouts/LayoutAdmin';
import LayoutClinet from '../pages/layouts/LayoutClinet';
import TrangChu from '../pages/views/Client/TrangChu';
import ShoppingCart from '../pages/views/Client/ShoppingCart';
import Checkout from '../pages/views/Client/Checkout';
import Dashboard from '../pages/views/Admin/Dashboard/Dashboard';
import ShowCategories from '../pages/views/Admin/CategoriesProduct/ShowCategory';
import AddCategory from '../pages/views/Admin/CategoriesProduct/AddCategory';
import EditCategory from '../pages/views/Admin/CategoriesProduct/EditCategory';
import ShowProducts from '../pages/views/Admin/Products/ShowProduct';
import AddProduct from '../pages/views/Admin/Products/AddProduct';
import EditProduct from '../pages/views/Admin/Products/EditProduct';
import SingleProduct from '../pages/views/Client/SingleProduct';
import Shop from '../pages/views/Client/Shop';
import ListProductCate from '../pages/views/Client/ListProductCate';
import Blog from '../pages/views/Client/Blog';
import DetailBlog from '../pages/views/Client/DetailBlog';
import ShowCateNews from '../pages/views/Admin/CategoryNews/ShowCateNews';
import AddCateNews from '../pages/views/Admin/CategoryNews/AddCateNews';
import EditCateNews from '../pages/views/Admin/CategoryNews/EditCateNews';
import ShowNews from '../pages/views/Admin/News/ShowNews';
import AddNews from '../pages/views/Admin/News/AddNews';
import EditNews from '../pages/views/Admin/News/EditNews';
import Contact from '../pages/views/Client/Contact';
import Introduce from '../pages/views/Client/Introduce';
import ShowContact from '../pages/views/Admin/Contact/ShowContact';
import ListNewsCate from '../pages/views/Client/ListNewsCate';




const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard/>
                            </Route>

                            {/* danh mục sản phẩm */}
                            <Route path='/admin/categories' exact>
                                <ShowCategories/>
                            </Route>
                            <Route path='/admin/add-category' exact>
                              <AddCategory/>
                            </Route>
                            <Route path='/admin/category/:id' exact>
                                <EditCategory />
                            </Route>

                            {/*sản phẩm */}
                            <Route path='/admin/products' exact>
                               <ShowProducts/>
                            </Route>
                            <Route path='/admin/add-product' exact>
                              <AddProduct/>
                            </Route>
                            <Route path='/admin/product/:id' exact>
                              <EditProduct/>
                            </Route>
                            
                            {/* danh mục tin tức */}
                            <Route path='/admin/catenews' exact>
                                <ShowCateNews/>
                            </Route>
                            <Route path='/admin/add-catenews' exact>
                              <AddCateNews/>
                            </Route>
                            <Route path='/admin/catenews/:id' exact>
                                <EditCateNews/>
                            </Route>

                            {/* tin tức */}
                            <Route path='/admin/news' exact>
                               <ShowNews/>
                            </Route>
                            <Route path='/admin/add-news' exact>
                             <AddNews/>
                            </Route>
                            <Route path='/admin/news/:id' exact>
                              <EditNews/>
                            </Route>

                            {/* liên hệ */}
                            <Route path='/admin/contact' exact>
                              <ShowContact/>
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route path="/:path?/:path?/:path?" exact>
                    <LayoutClinet>
                        <Switch>
                            <Route path="/" exact>
                             <TrangChu/>
                            </Route>
                            <Route path="/single_product/:id">
                                <SingleProduct/>
                            </Route>
                            <Route path="/shop">
                                <Shop />
                            </Route>
                            <Route path="/list_productcate/:id">
                                <ListProductCate/>
                            </Route>
                            <Route path="/blog">
                                <Blog />
                            </Route>
                            <Route path="/list_newscate/:id">
                                <ListNewsCate/>
                            </Route>
                            <Route path="/detail_blog/:id">
                                <DetailBlog/>
                            </Route>
                            <Route path="/contact">
                                <Contact/>
                            </Route>
                            <Route path="/introduce">
                                <Introduce/>
                            </Route>
                            <Route path="/shopping_cart">
                                <ShoppingCart/>
                            </Route>
                            <Route path="/checkout">
                                <Checkout/>
                            </Route>
                        </Switch>
                    </LayoutClinet>
                </Route>
            </Switch>
        </Router>
    )
}


export default Routers
