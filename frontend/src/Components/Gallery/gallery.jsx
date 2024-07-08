<Router>
<Navbar/>
 <ToastContainer/>
<div className="userroutes">
<Routes>
<Route path='/' element={<Homeindex/>} />
</Routes> 
</div>
<div className="adminroutes">
 <Routes>
 <Route path='/Home' element={<Homeindex/>} />

   <Route path='/login' element={<Login />} />
   <Route path='/admin/dashboard' element={<ProtectedRoute isAdmin={true}><Layout><MovieList/></Layout></ProtectedRoute>} />
 </Routes>
</div>
</Router>