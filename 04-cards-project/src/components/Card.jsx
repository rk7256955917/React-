import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = () => {
  return (
       <div className="card">
        <div>
        <div className="top">
         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAACUCAMAAAATdsOFAAAAnFBMVEX///8EBwf4mB0AAACen5/4kwD4jwDz8/P4lhT4kQAAAwP4jQD8/Pz4lAv29vY3Nzf/+fPV1dXr6+vh4eFcXV3+8+fDw8O5ubksLCxsbW2ysrL959L6smlUVVVQUFCCg4MfHx+oqKiRkZH81bA/QEASExN5enpHR0dlZWX7yZP7z6H82rr5oz75pkf6uXT6r2D94sb5oC37woX5qVXpfAMUAAAIFElEQVR4nO2c2ZaiMBCGWyKbgGyCC7YKrrigwvu/2wTcNYW2QsKc43/ljBK+rlQqlUrg5+err7766r+Satmm67rtg1zXtC3WSC/Jbgezxe9kNEUnjfTBYhi0bdZk+TJnLX10Qm7UUjVOf8BkMDRZ8wFSzUUtg6wRdeAPLJU154Ps3uBsaFBpD3TNJmvWG1n+BDT3g/Er5Tft1mvcR3i9zhr4pGa39sxT7tymMWfNnEl1X3SVG3hUAadp+n8GT4U6LnPyYPoOOWbXGdtdDWrvkad2Zxsk6295y5F9wpLc/YAcszOMkXbnE3LsMswSSqv7ETkOkQEr9PZH7pKafc4oEbb1PPJT5pvP7rNB78FYh/S81fqdj3KzSdRl4u3NEYSeZrZ+uqpL13n13xzLow6TeakNk3dN8fI7qwfHoQabVAYyOs5O7hZC6gBkZxLabcCH0S8haoBRFA0YZAN1Mg3SSQPPnkBdNBIJPy9ZLSIMmpJzWR/qI0Qf3SLbEQXkBb8NuTsDdJcYNtAEihhDCJ1+iPGJKww0hEZdvQZ4DP3FUpsUGxvwxO4CsRT1aFJnas4IGQrsL2B+zCKLUf3W/FxdPJQYG2gB/twCcjWGyw27XR+2BvOJ3pmivBxWrB76UU3b7AVBThpYXfSn+qKz0Bedhf5DdNF22349CGZAabKK6BaOlsNuaz7pHPfyiOSVQlebolnvTm7nWTJ2ldBV22wH+jkvgIGrho49ZPC0aFRFdH82/zN3FdCb/qT2Bjd7dMsfvcfNGr3pzj/Z2mCIbgX/686GPfisyM4O3X16oqGq6C/tazTytghYofeekJ9P8XT0TrXQodrKEQpLn9VdLNM0od0bNuh5e0kp98y1rOapBKlWCV3MKfij0eKuIFeppUYAk0+7D5XEKqHbcNDQCcW4KqHPQHJi4bFC6Ca0LYc6xOpdhdAhoyNErjtWp1xqQoERQqkOehva1poDe0OVQRehjVDUBq6oDDoUGeGzaOCuBm10EzL6DNpLBPeSaKMDW9U1+FgRecePPrr6S+bI2cELoHFNGx3q/Sm4lQjOA5SPf6nQKAVPu1rkIwXpJjFVcowO9L4OoZP35bNLqJL/WPApHuAKaFzjxIEqORwbIV8H/QWPbLoH1yB0MF6YcMmD8k47jE6OF+I8ZxU7oIoO+XoNLYjd7+dUDiifwYciTA2NSDmMlVf0aMBnaMpBhz2GcIAq/9QyGtE0uwo+5EBaJA2flCVRi2KQyTtzeX8mXXxexKZ6EgmuweCRemN3s/u8oopoHgBz80LG72WlJPrQ2czbS4jnOssRXD9KQ8Z00EtRLHeov/j8DOpSQ4cn9gzkpX3q2yvope1gOnUyfeO1zeozO3kuK0NgEvum0IDaUxsqWHLMUe6TD/TO9ubvaBDBETxmc852lqC/PpPUQN02ECkR1fk0Pz4S+fBURX6+E6Eh5ZPgz4LMHV9mWFJXoWmd9kPuze7ru73o+ACS+Gh2xOJAMp6XXp9xjoZ9eFSSnOGXLvtFdqSfsxq1fhNmGmjO6Flfe/YCO0KLKzzx+hIcdZi9SCNNxp+sI9DUv4l84gJdvgMLwzRk6jnwh/dM3F9yOoaCaBft7tWsA+/KSLn1BcmVD6sPHBSpw95LrM/023MjhxMZejcgj8H0AX78Nf0HTAhSzXbQ6lyl6aN5N+jBbyRp9rot4M9ioKZl23a75/t+z8WfLDF/hhTJr4nxVuNlGIbL8c75HMkJjc8beUWqF240Xtb4TLK8X35KHyrKmAK8s9oogsZdSVK2H7KvOEmLvGL4QBnj9S13xr7+8LZqKHD8ZlkMIiAnSh1FFo6SpWLQf34ihZP4fgHDBtRSUfabfoxH52qFx2m8VjL0zeedHckcx8tlevx902OtIHQjSlsSkhWlWIPvuMV31D4dpllLEY/ZNTkue7hebph2dFSEqYx+5n38Pi7b8M7xfthWWlhMk4mQjRxNioppjygcI7Uk+7BJXXRVULORdghZMh965ayCjdVakTg+jcOOlI7SonrYCLljuBXWYQk+74y32awkjfE/PNzHWr+wto0xLx2nOXkdF9WZRznhVsqmU36d2jodpXKRt/Dk02Qt8dy2wAnWidbaoWmZy7xEkvAtimv/5zR6TqaXIq8Ab1SN5UY+9aecZC16OJ4JBcWXk4z46PCHGynY6z+iN5xVrJ0TL4k7xt6Y56R9IcDX91rt5evkTpCi5erNSU/1xvHmlGulUx43PoQuY499flwg9VHeRrnJTHmeS+K/rwoML4zwyuKqD4X9KW6tMHkRScDjTUP5LrWWMMG6/wfje+F2zWmadN2GEJ2vj/E3uxLI0zsnN3c93FpTFD6Jd45jGMCMpaqG4TjLaCPg9dBdA/zmwuqtJa0EdznIWK7le/bMWwWFX2+icLna7TzPucjzdrtdGPc3e0W577MUnIuvumypFR1dbuTFGk+CT82Pl8Q42u03yXbbT7VNks1eyv73sbcyf+tfzz7OVolLJMeG3yUKieMCJGkXSfBPJWV/uw5QV7vS1wWrPZ8L/4rwCC/TOWCNE+4jeo3b0KryPMhY9Tn5TXicSWzHZS7Wn8J7Iac8xozn4IoWF1Gc+0iqg5cIwp9MLwl4bDqsXOVWRpiki78X+HHgkbiEmYcT5S2jZA9E7hM2Dvn7JFrSqiv8Qc5uHCd7SRD4uw7ApuYFQdpv40KKz+XIwHO+t8R/AKfJylEyz62TKMRfVMS984TzrExeqsPH6r0v/quvvvrqq68K0z/XgpdqotJIZQAAAABJRU5ErkJggg==" alt="" />
         <button>Save <Bookmark size={10} /> </button>
        </div>
        <div className="center">
          <h3>Amazon <span> 5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>

          <div className='tag'>
          <h4>Part Time</h4>
          <h4>Senior Level</h4>
          </div>
          </div>
          </div> 
          <div className="bottom">
            <div>
              <h3>$120/hr</h3>
              <p>Mumbai,India</p>
            </div>
            <button>Apply Now</button>
          </div>
        </div>
  )
}

export default Card
