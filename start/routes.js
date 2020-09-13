'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/index', (context) => {
    const { view, request, response} = context

    return view.render("component-index")
})
Route.on('/').render('welcome')

Route.get('/login', "AuthController.login")
Route.post("/login", "AuthController.loginUser")

Route.get("/register" , "AuthController.register")
Route.post("/register" , "AuthController.registerUser")
Route.get("/api/register" , "AuthController.registerUser")

Route.get('/user/detail', "AuthController.detail").middleware('auth')

Route.post('/booking', "BookingController.booking").middleware('auth')


Route.get('/logout', "AuthController.logout").middleware('auth')


'use strict'
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/
/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
Route.group(() => {
  Route.resource('/profiles', 'ProfileController')
  Route.resource('/posts','PostController')
  Route.resource('/comment','CommentController')
  Route.resource('/category','CategoryController')
}).prefix('api/v1')