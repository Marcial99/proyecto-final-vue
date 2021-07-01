import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
      children: [
        {
          path: "alumno",
          name: "FormularioAlumno",
          component: () => import("../components/User/FormularioAlumno.vue"),
        },
        {
          path: "personal",
          name: "FormularioPersonal",
          component: () => import("../components/User/FormularioPersonal.vue"),
        },
        // other nested routes
      ],
    },
    {
      path: "/profile",
      name: "profile",
      // lazy-loaded
      component: () => import("../views/Profile.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      // lazy-loaded
      component: () => import("../views/BoardAdmin.vue"),
      // children:[
      //   {
      //     path: 'carrera',
      //     name: 'carrera',
      //     component: () => import('../views/admin/Carrera.vue')
      //  },
      // ]
    },

    {
      path: "/alumno",
      name: "alumno",
      // lazy-loaded
      component: () => import("../views/admin/Alumno.vue"),
    },
    {
      path: "/historialPruebas",
      name: "historialPruebas",
      // lazy-loaded
      component: () => import("../views/mobile/HistorialPruebas.vue"),
    },
    {
      path: "/historialEncuestas",
      name: "historialEncuestass",
      // lazy-loaded
      component: () => import("../views/mobile/HistorialEncuestas.vue"),
    },
    {
      path: "/notificaciones",
      name: "notificaciones",
      // lazy-loaded
      component: () => import("../views/mobile/Notificaciones.vue"),
    },
    {
      path: "/alerta",
      name: "alerta",
      // lazy-loaded
      component: () => import("../views/admin/Alerta.vue"),
    },
    {
      path: "/consulta",
      name: "consulta",
      // lazy-loaded
      component: () => import("../views/admin/Consulta.vue"),
    },
    {
      path: "/receta",
      name: "receta",
      // lazy-loaded
      component: () => import("../views/admin/Receta.vue"),
    },
    {
      path: "/carrera",
      name: "carrera",
      // lazy-loaded
      component: () => import("../views/admin/Carrera.vue"),
    },
    {
      path: "/encuesta",
      name: "encuesta",
      // lazy-loaded
      component: () => import("../views/admin/Encuesta.vue"),
    },

    {
      path: "/medico",
      name: "medico",
      // lazy-loaded
      component: () => import("../views/admin/Medico.vue"),
    },
    {
      path: "/personal",
      name: "personal",
      // lazy-loaded
      component: () => import("../views/admin/Personal.vue"),
    },
    {
      path: "/prueba",
      name: "prueba",
      // lazy-loaded
      component: () => import("../views/admin/Prueba.vue"),
    },
    {
      path: "/rol",
      name: "rol",
      // lazy-loaded
      component: () => import("../views/admin/Rol.vue"),
    },
    {
      path: "/trazabilidad",
      name: "trazabilidad",
      // lazy-loaded
      component: () => import("../views/admin/Trazabilidad.vue"),
    },
    {
      path: "/usuario",
      name: "usuario",
      // lazy-loaded
      component: () => import("../views/admin/Usuario.vue"),
    },
    {
      path: "/mod",
      name: "moderator",
      // lazy-loaded
      component: () => import("../views/BoardModerator.vue"),
    },
    {
      path: "/modprueba",
      name: "modprueba",
      // lazy-loaded
      component: () => import("../views/moderator/modprueba.vue"),
    },
    {
      path: "/historial_correos",
      name: "historial_correos",
      // lazy-loaded
      component: () => import("../views/moderator/HistorialCorreos.vue"),
    },
    {
      path: "/correo",
      name: "correo",
      // lazy-loaded
      component: () => import("../views/moderator/correo.vue"),
    },
    {
      path: "/medic",
      name: "medic",
      // lazy-loaded
      component: () => import("../views/BoardMedic.vue"),
    },
    {
      path: "/detalles",
      name: "detalles",
      // lazy-loaded
      component: () => import("../views/medic/Detalles.vue"),
    },
    {
      path: "/actualizarPruebas",
      name: "actilizarPruebas",
      // lazy-loaded
      component: () => import("../views/medic/ActualizarPrueba.vue"),
    },
    {
      path: "/manager",
      name: "manager",
      // lazy-loaded
      component: () => import("../views/BoardManager.vue"),
    },
    {
      path: "/verPruebas",
      name: "verPruebas",
      // lazy-loaded
      component: () => import("../views/medic/VerPruebas.vue"),
    },
    {
      path: "/report",
      name: "report",
      // lazy-loaded
      component: () => import("../views/BoardReport.vue"),
    },
    {
      path: "/casosEstudiante",
      name: "casosEstudiante",
      // lazy-loaded
      component: () => import("../views/reportes/casosEstudiante.vue"),
    },
    {
      path: "/casosPersonal",
      name: "casosPersonal",
      // lazy-loaded
      component: () => import("../views/reportes/casosPersonal.vue"),
    },
    {
      path: "/casosCarrera",
      name: "casosCarrera",
      // lazy-loaded
      component: () => import("../views/reportes/casosCarrera.vue"),
    },
    {
      path: "/casosDepartamento",
      name: "casosDepartamento",
      // lazy-loaded
      component: () => import("../views/reportes/casosDepartamento.vue"),
    },
    {
      path: "/graCasosCarrera",
      name: "graCasosCarrera",
      // lazy-loaded
      component: () => import("../views/reportes/graCasosCarrera.vue"),
    },
    {
      path: "/graCasosEncuesta",
      name: "graCasosEncuesta",
      // lazy-loaded
      component: () => import("../views/reportes/graCasosEncuesta.vue"),
    },
    {
      path: "/graCasosMedico",
      name: "graCasosMedico",
      // lazy-loaded
      component: () => import("../views/reportes/graCasosMedico.vue"),
    },
    {
      path: "/trazabilidad_correos",
      name: "TrazabilidadCorreos",
      // lazy-loaded
      component: () => import("../views/user/TrazabilidadCorreos.vue"),
    },
    {
      path: "/user",
      name: "user",
      // lazy-loaded
      component: () => import("../views/BoardUser.vue"),
      children: [
        {
          path: "solicitud_medico",
          name: "solicitud_medico",
          component: () => import("../components/User/Solicitud_Medico.vue"),
        },
        // other nested routes
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const publicPages = [
    "/login",
    "/register",
    "/home",
    "/register/alumno",
    "/register/personal",
  ];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});
