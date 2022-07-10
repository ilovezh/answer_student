export default [
    {
        path:"/login",
        component:()=>import("@/views/Login"),
        

    },
    {
        path:"/register",
        component:()=>import("@/views/Register"),
       
    },
    {
         path:"/home",
         component:()=>import("@/views/Home"),
         meta:{show:true},
         children:[
            {
                path:"chinese",
                component:()=>import("@/views/Home/Chinese"),
                meta:{show:true},
                children:[
                    {
                        path:"top",
                        component:()=>import("@/views/Home/Chinese/Top")
                    },
                    {
                        path:"bottom",
                        component:()=>import("@/views/Home/Chinese/Bottom")
                    }
                ]
            },
            {
                path:"math",
                component:()=>import("@/views/Home/Math"),
                meta:{show:true},
                children:[
                    {
                        path:"add",
                        component:()=>import("@/views/Home/Math/Add")
                    },
                    {
                        path:"div",
                        component:()=>import("@/views/Home/Math/Div")
                    },
                    {
                        path:"mul",
                        component:()=>import("@/views/Home/Math/Mul")
                    },
                    {
                        path:"mod",
                        component:()=>import("@/views/Home/Math/Mod")
                    },
                    {
                        path:"random",
                        component:()=>import("@/views/Home/Math/Random")
                    },
                ]
            },
            {
                path:"english",
                component:()=>import("@/views/Home/English"),
                meta:{show:true},
            },
            {
                path:"note",
                component:()=>import("@/views/Home/Notes"),
                meta:{show:true},
            }
         ]
    },
    {
        path:"/sorce",
        component:()=>import("@/views/Sorce")
    },
    {
        path:"/rank",
        component:()=>import("@/views/Rank")
    },
    {
        path:"/article/:key?",
        component:()=>import("@/views/Article")

    },
    {
        path:"/madel",
        component:()=>import("@/views/Madel")
    },
    {
        // 匹配路由时是根据路由表从上到下依次匹配的,如果前面没有匹配到任何路由,即进行路由重定向
        // 重定向,在项目跑起来的时候,如果匹配不到任何路由,不管访问的目录是什么 ,立马定向到首页
        path:"*",
        // path:"*"表示访问任意目录
        redirect:"/home"
    }
]