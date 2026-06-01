from machine import Pin, PWM
from utime import sleep, ticks_us, ticks_diff



# Ultrassônico
trig = Pin(2, Pin.OUT)
echo = Pin(3, Pin.IN)  

# PIR
pir = Pin(15, Pin.IN)

# RELÉ
rele = Pin(27, Pin.OUT)

# LED (
led = PWM(Pin(16))
led.freq(1000)


pir_estado = 0
rele.low()

while True:
    # --- CÓDIGO DO ULTRASSÔNICO ---
    trig.low()
    sleep(0.002)
    
    trig.high()
    sleep(0.00001)
    trig.low()

    while echo.value() == 0:
        start = ticks_us()

    while echo.value() == 1:
        end = ticks_us()

    duracao = ticks_diff(end, start)
    distancia = (duracao * 0.0343) / 2

    print(f"Distância: {distancia:.2f} cm")
    
    # --- CÓDIGO DO PIR ---
    if pir.value() == 1 and pir_estado == 0:
        pir_estado = 1
        print("Movimento detectado!")
    else:
        print("Nenhum movimento.")
    
    
    if pir_estado == 1 and distancia < 50:
        print("Veneninho, pshhhh!")
        led.duty_u16(65535)
        rele.high()
        sleep(3) 
    pir_estado = 0
    rele.low()
    
    led.duty_u16(0)   
    sleep(0.1)