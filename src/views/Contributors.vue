<template>
  <div class="contributors">
    <h1>Contributors</h1>
    <br>
    <h3>Artist</h3>
    <p>
      Holly Carr
    </p>
    <div class = "student_names">
      <div id="product_management">
        <h3>Project Management</h3>
        <ul>
          <li>Kelsey Rideout</li>
          <li>Liam Jacquet</li>
        </ul>
      </div>
      <div id="product_manager">
        <h3>Product Manager</h3>
        <ul>
          <li>Zipeng Li</li>
        </ul>
      </div>
      <div id="requirements_analysis">
        <h3>Requirements Analysis</h3>
        <ul>
          <li>Riley Meyers</li>
          <li>Aavha Gyawali</li>
          <li>Noah Baker</li>
          <li>Swiler Boyd</li>
          <li>Keegan MacDonald</li>
          <li>Prabhleen Singh</li>
          <li>Brent Rushton</li>
          <li>Daniel Brownell</li>
          <li>Locelyn Losier</li>
          <li>Ciaran O'Brien</li>
          <li>Chamath Kuruwita</li>
          <li>Zeyangguang Li</li>
          <li>Nic Oakley</li>
        </ul>
      </div>
      <div id="design">
        <h3>Design</h3>
        <ul>
          <li>Patrick Viscount</li>
          <li>Ben McNutt</li>
          <li>Zwee Dao</li>
          <li>Jakob Legere</li>
          <li>Jenna Floyd</li>
        </ul>
        </div>
      <div id="implementation">
        <h3>Implementation</h3>
        <ul>
          <li>Jamie Symonds</li>
          <li>Terence Bungay</li>
          <li>Will Sladek</li>
          <li>Logan VanOostrum</li>
        </ul>
      </div>
      <div id="qa">
        <h3>Quality Assurance</h3>
        <ul>
          <li>Allan Morykot</li>
          <li>Sarah Reid</li>
        </ul>
      </div>
    </div>
    <div class="bottom_nav">
      <p>
        <router-link to="/">Home</router-link>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.contributors {
  color: white;
  padding-top: 20px;
  font-family: Baskerville;
}

.student_names {
  column-count: 2;
  padding: 1% auto 5% auto;
  text-align: center;
}

ul{
  list-style-type: none;
  text-align: center;
  padding: 0;
  margin: 20px;
}

#requirements_analysis {
  -webkit-column-break-inside: avoid;
}
</style>

<script>
export default {
  name: 'Contributors'
}
</script>