// Solucionar algún problema al lanzar la app
adb reverse tcp:8081 tcp:8081 /* O BIEN */ adb kill-server && adb start-server

// Después de iniciar cualquier proyecto en react native aplicar
// Esto es con el fin de obtener el SDK de java
source $HOME/.bash_profile

// Posible solución cuando react-native run-android no funciona ni npm start
sudo lsof -i :8081
kill -9 ID_SHOWN_FROM_PREVIOUS_CMD  //previous cmd no funcionaría. pero el en caso anterior ya funcionó

