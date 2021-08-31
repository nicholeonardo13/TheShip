import './FooterComponent.css'


function FooterComponent(){

    return(
        <>
        <footer className="text-center text-white spacing-footer" style={{ backgroundColor: "#f1f1f1"}}>

<div class="container pt-4">

  <section class="mb-4">

    <a
      className="btn btn-link btn-floating btn-lg text-dark m-1"
      href="#!"
      role="button"
      data-mdb-ripple-color="dark"
      ><i className="fa fa-twitch"></i
    ></a>


    <a
      className="btn btn-link btn-floating btn-lg text-dark m-1"
      href="#!"
      role="button"
      data-mdb-ripple-color="dark"
      ><i className="fa fa-twitter"></i
    ></a>

    <a
      className="btn btn-link btn-floating btn-lg text-dark m-1"
      href="#!"
      role="button"
      data-mdb-ripple-color="dark"
      ><i className="fa fa-google"></i
    ></a>


    <a
      className="btn btn-link btn-floating btn-lg text-dark m-1"
      href="#!"
      role="button"
      data-mdb-ripple-color="dark"
      ><i className="fa fa-instagram"></i
    ></a>


    <a
      className="btn btn-link btn-floating btn-lg text-dark m-1"
      href="#!"
      role="button"
      data-mdb-ripple-color="dark"
      ><i className="fa fa-linkedin"></i
    ></a>

    <a
      className="btn btn-link btn-floating btn-lg text-dark m-1"
      href="#!"
      role="button"
      data-mdb-ripple-color="dark"
      ><i className="fa fa-github"></i
    ></a>
  </section>

</div>



<div className="text-center text-dark p-3" style={{backgroundColor: "#202529"}}>
  <span style={{color: "#ffffffff"}}>© 2021 Copyright: LE20-2</span>
</div>

</footer>
        </>
    )

}

export default FooterComponent