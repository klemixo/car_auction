<template>
  <div>
    <h2>Sales history</h2>
    <div class="sales-history">
      <table class="styled-table">
        <thead>
          <tr>
            <th>Auction</th>
            <th>Date</th>
            <th>Lot #</th>
            <th>Final bid</th>
            <th>Odometer</th>
            <th>Status</th>
            <th>Seller</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="car in cars">
            <tr>
              <td class="branch">
                <span
                  class="badge"
                  :class="{ red: branch(car.production_year) }"
                >
                  {{ branch(car.production_year) ? "IAAI" : "Copart" }}
                </span>
              </td>
              <td>
                {{ car.createdate }}
              </td>
              <td>
                {{ car.run_number }}
              </td>
              <td class="bold">{{ car.final_bid }}$</td>
              <td>
                {{ car.odometer }}
              </td>
              <td class="status">
                <span>Not sold</span>
              </td>
              <td>Non-Insurence Company</td>
              <td class="action">
                <router-link class="black" :to="'/car/' + carData.id"
                  >More details <img src="img/arrow.svg" alt=""
                /></router-link>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cars"],
  methods: {
    branch(year) {
      return +year % 2 === 0;
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  h2 {
    text-align: left;
  }
}
.sales-history {
  margin-bottom: 65px;
  table {
    width: 100%;
    text-align: left;
    th,
    td {
      padding: 11px 9px;
      font-size: 16px;
    }
    tr {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    td {
      &.bold {
        font-weight: bold;
      }
      &.branch {
        span {
          background: #1882ff;
          border-radius: 3px;
          color: white;
          padding: 5px;
          &.red {
            background: red;
          }
        }
      }
      &.status {
        span {
          width: 89px;
          height: 25px;
          border: 1px solid #597bd5;
          color: #597bd5;
          border-radius: 3px;
          padding: 5px;
        }
      }
      &.action {
        a {
          font-size: 16px;
          line-height: 21px;
          color: black;
          display: flex;
          gap: 6px;
          align-items: center;
          text-decoration: none;
        }
      }
    }
    th {
      background: #f8f8f8;
      td {
        font-weight: bold;
      }
    }
  }
}
</style>