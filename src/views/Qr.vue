<template>
  <div class="about">
    <h1>QR Sample</h1>
    <div class="main">
      <div>
        <h2>Data</h2>
        <textarea name="data" id="data" cols="50" rows="20" v-model="qrData"> {{ qrData }} </textarea>
      </div>
      <div>
        <h2>QRCODE</h2>
        <div v-if="qrData" ref="qr">
          <qrcode :value="qrData" :options="{ width: 300 }"></qrcode>
        </div>
        <div class="actions">
          <button @click="pdf">Pdf</button>
          <button @click="print">Print</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import qrcode from "@chenfengyuan/vue-qrcode";
import jspdf from "jspdf";
import html2canvas from "html2canvas";
window.html2canvas = html2canvas;
export default {
  components: { qrcode },
  data: () => ({
    qrData: "data"
  }),
  methods: {
    pdf() {
      const doc = new jspdf();
      doc.html(this.$refs.qr, {
        html2canvas: {
          scale: 0.5
        },
        callback: function(doc) {
          doc.save();
        }
      });
    },
    print() {
      const doc = new jspdf();
      doc.html(this.$refs.qr, {
        html2canvas: {
          scale: 0.5
        },
        callback: function(doc) {
          doc.autoPrint({ variant: "non-conform" });
          doc.save("autoprint.pdf");
        }
      });
    }
  }
};
</script>
<style>
.main {
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: flex-start;
  align-content: center;
  margin: 0 auto;
}
.main > * {
  width: 50%;
}
.actions {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>