<template>
  <div class="contributors">
    <h1>Contributors</h1>
    <div class = "names">
      <div class="product_management">
        <h3>Project Management</h3>
        <ul>
          <li>Kelsey Rideout</li>
          <li>Liam Jacquet</li>
        </ul>
      </div>
      <div class="product_manager">
        <h3>Product Manager</h3>
        <ul>
          <li>Zipeng Li</li>
        </ul>
      </div>
      <div class="requirements_analysis">
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
      <div class="design">
        <h3>Design</h3>
        <ul>
          <li>Patrick Viscount</li>
          <li>Ben McNutt</li>
          <li>Zwee Dao</li>
          <li>Jakob Legere</li>
          <li>Jenna Floyd</li>
        </ul>
        </div>
      <div class="implementation">
        <h3>Implementation</h3>
        <ul>
          <li>Will Sladek</li>
          <li>Logan VanOostrum</li>
        </ul>
      </div>
      <div class="qa">
        <h3>Quality Assurance</h3>
        <ul>
          <li>Allan Morykot</li>
          <li>Sarah Reid</li>
        </ul>
      </div>
    </div>

    <p><router-link to="/">Back to Intro</router-link></p>
  </div>
</template>

<style lang="scss" scoped>

.contributors {
  color: white;
  padding-top: 20px;
}

.names {
  column-count: 2;
  padding: 2% 25% 5% 25%;
  text-align: center;
}

ul{
  list-style-type: none;
  text-align: center;
  padding: 0;
  margin: 20px;
}

.requirements_analysis {
  -webkit-column-break-inside: avoid;
}
</style>

<script>
export default {
  name: 'Contributors'
}
</script>