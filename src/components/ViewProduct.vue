<template>
  <v-simple-table
  app
  absolute
  >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">
            #
          </th>
          <th class="text-center">
          </th>
          <th class="text-center">
            NAME
          </th>
           <th class="text-center">
            CODE
          </th>
           <th class="text-center">
            MRP
          </th>
           <th class="text-center">
            USER PRICE
          </th>
           <th class="text-center">
            ACTION
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in products"
          :key="item.name"
        >
          <td>{{ item.Sn }}</td>
          <td>{{item.image }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.code }}</td>
          <td>{{ item.mrp }}</td>
          <td>{{ item.user_price }}</td>
          <td>{{ item.action }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>


<script>
  export default {
    name: 'ViewProduct',
    data () {
      return {
        products: [
          {
            Sn: 1,
            image:"https://images-na.ssl-images-amazon.com/images/I/71raEDRz7fL._SL1500_.jpg",
            name:"F.r.i.e.n.d.s coffee mug",
            code:"FRMG",
            mrp:"350",
            user_price:325,      
            action:"action"   
        },
        ],
      }
    },
  }
</script>