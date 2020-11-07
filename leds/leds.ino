
int amarillo = 13;
int milisegundos = 500;

void setup() {
  pinMode(amarillo, OUTPUT );

}

void loop() {
  digitalWrite(amarillo, HIGH);
  delay(milisegundos);
  digitalWrite(amarillo, LOW);
  delay(milisegundos);
}
