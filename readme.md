# 📝 Blog Firebase - React Project

Este proyecto es una aplicación web de "Blog" desarrollada como parte de una asignación académica para la **UNELLEZ**. El objetivo principal es demostrar el dominio de la gestión de estado global en React y la integración con servicios de base de datos en tiempo real.

## 🚀 Características

- **Gestión de Estado Global:** Implementación de `useContext` y `useReducer` para manejar el flujo de datos sin "prop drilling".
- **Persistencia en Tiempo Real:** Conexión con **Firebase Firestore** para el almacenamiento de artículos y comentarios.
- **Navegación Dinámica:** Uso de `react-router-dom` para gestionar las rutas de la aplicación (Home, Detalle y Creación).
- **Diseño Responsivo:** Interfaz limpia adaptada para lectura en distintos dispositivos.

## 🛠️ Tecnologías Utilizadas

- **React 18** (Vite)
- **Firebase SDK** (Firestore)
- **React Router**
- **CSS3** (Estilos personalizados)

## 📋 Requerimientos del Proyecto Cumplidos

1.  **Estado Global (Context + Reducer):**
    - Se utiliza un `BlogProvider` que encapsula la lógica del negocio.
    - El `blogReducer` gestiona las acciones: `SET_POSTS`, `ADD_POST`, `ADD_COMMENT`, `SET_LOADING` y `SET_ERROR`.
2.  **Funcionalidades:**
    - **Página Principal:** Listado automático de posts desde Firestore.
    - **Vista de Detalle:** Visualización completa de contenido y comentarios asociados.
    - **Creación de Posts:** Formulario funcional para añadir nuevos artículos.
3.  **Base de Datos:**
    - Estructura de documentos en Firestore para `posts` y `comments`.
    - Configuración en "Test Mode" para acceso público según los requisitos.

## 🔧 Instalación y Configuración

1.  **Clonar el repositorio:**
    ```bash
    git clone [url-del-repo]
    cd blog-firebase
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar Firebase:**
    - Crea un proyecto en [Firebase Console](https://console.firebase.google.com/).
    - Habilita Firestore en "Modo de Prueba".
    - Copia tus credenciales en el archivo `src/config/firebase.js`.

4.  **Ejecución en local:**
    ```bash
    npm run dev
    ```

5.  **Despliegue (Build):**
    ```bash
    npm run build
    firebase deploy
    ```

## ✒️ Autor
**Estudiante:** [Ricardo Alfredo Sanguinetti]
**Institución:** UNELLEZ