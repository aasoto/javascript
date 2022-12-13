const time = {
  hours: {
    value: 0,
    limit: 23
  },
  minutes: {
    value: 0,
    limit: 59
  },
  seconds: {
    value: 0,
    limit: 59
  }
}

const btns_increase = document.querySelectorAll('.btn-increase')
const btns_decrease = document.querySelectorAll('.btn-decrease')

const btn_start = document.querySelector('#btn-start')
const btn_stop = document.querySelector('#btn-stop')
const btn_restart = document.querySelector('#btn-restart')

let counter = 0

btns_increase.forEach( function (btn_increase) {
  btn_increase.addEventListener('click', function (btn) {
    const unit = btn.target.getAttribute('data-unidad')
    increase(unit)
  })
})

function increase (unit) {
  if (time[unit].value + 1 <= time[unit].limit) {
    time[unit].value ++
  }
  print_display()
}

btns_decrease.forEach( function (btn_decrease) {
  btn_decrease.addEventListener('click', function (btn) {
    const unit = btn.target.getAttribute('data-unidad')
    decrease(unit)
  })
})

function decrease (unit) {
  if (time[unit].value - 1 >= 0) {
    time[unit].value --
  }
  print_display()
}


function print_display() {
  const hours = document.querySelector('#hours .number')
  const minutes = document.querySelector('#minutes .number')
  const seconds = document.querySelector('#seconds .number')
  
  hours.textContent = `0${time.hours.value}`.slice(-2)
  minutes.textContent = `0${time.minutes.value}`.slice(-2)
  seconds.textContent = `0${time.seconds.value}`.slice(-2)
  
}

btn_start.addEventListener('click', start_count)
btn_stop.addEventListener('click', stop_count())
btn_restart.addEventListener('click', function (e) {
  start_count()
  time.hours.value = 0
  time.minutes.value = 0
  time.seconds.value = 0
  print_display()
})


function start_count () {
  counter = setInterval(() => {
    const { hours, minutes, seconds } = time

    if (hours.value === 0 && minutes.value === 0 && seconds.value === 0) {
      stop_count ()
    } else if (seconds.value === 0) {
      if (minutes.value === 0) {
        if (hours.value === 0) {
          
        } else {
          time.seconds.value = time.seconds.limit
          time.minutes.value = time.minutes.limit
          decrease('hours')
        }
      } else {
        time.seconds.value = time.seconds.limit
        decrease('minutes')
      }
    } else {
      decrease('seconds')
    }
  }, 1000)
}

function stop_count () {
  clearInterval(counter)
}