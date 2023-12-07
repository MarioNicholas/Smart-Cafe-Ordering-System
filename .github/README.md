<h1 align="center">
  Final Milestone - Tugas Besar II3120 Layanan STI
</h1>

<h4 align="center">Implementasi Prototipe Layanan PWA Smart-cafe.</h4>
<p align="center">Kelompok 01 - K01</p>

<table>
<tr><td>Mario Nicholas Reyhan - 18221061</td></tr>
<tr><td>Nicolas Owen Halim - 18221095</td></tr>
<tr><td>Ivan Leovandi - 18221129</td></tr>
<tr><td>Raden Dizi Assyafadi Putra - 18221155</td></tr>
<tr><td>Haerun Nisak - 10023165</td></tr>
</table>

<p align="center">
  <a href="#about">Deskripsi</a> •
  <a href="#installation">Installation</a> •
  <a href="#api-endpoint">API Endpoint</a> •
  <a href="#license">License</a>
</p>

---

## Deskripsi

<table>
<tr>
<td>
  
**Smart Cafe System** adalah sebuah prototipe sebagai implementasi dari [Layanan Pemesanan berbasis PWA](https://github.com/MarioNicholas/K01_Kelompok1_Deliverable4) untuk Smart-Cafe. Protitipe ini dibuat untuk memenuhi kebutuhan Tugas Besar II3120 Layanan Sistem dan Teknologi Informasi. Prototipe ini dibuat menggunakan NextJS dan MongoDB.

![Landing](/.github/images/Landing.jpg)
<p align="right">
<sub>(Preview)</sub>
</p>

Website ini dapat diakses secara langsung melalui link berikut: [Smart Cafe System](https://k01-kelompok1-deliverable4.vercel.app/)
</td>
</tr>
</table>

## Installation

### Prerequisites

* [Install](https://nodejs.org/en/download/) the latest version of **Node.js**
* [Install](https://www.npmjs.com/get-npm) the latest version of **NPM**

### Installation Steps

1. Clone the repository

    ```bash
    git clone https://github.com/MarioNicholas/K01_Kelompok1_Deliverable4.git
    ```

2. Change the working directory

    ```bash
    cd K01_Kelompok1_Deliverable4
    ```

3. Install dependencies

    ```bash
    npm install
    ```

4. Run the app

    ```bash
    npm run dev
    ```

### Cara Penggunaan Prototipe

1. Akses Website tersebut melalui [Website](https://k01-kelompok1-deliverable4.vercel.app/) atau [Localhost](https://k01-kelompok1-deliverable4.vercel.app/) bila dijalankan secara lokal.

2. Setelah muncul tampilan halaman utama, silahkan pilih menu dan jumlah yang diinginkan
![Buy](/.github/images/Buy.png)
3. Setelah memilih menu, silahkan akses cart untuk melihat pesanan yang telah dipilih
![Cart](/.github/images/Cart.png)
4. Setelah memilih pesanan, silahkan klik checkout untuk mengkonfirmasi pesanan.
![Confirmed](/.github/images/confirmed.png)

## API Endpoint

### `GET /api/meals`

Mengambil daftar makanan yang tersedia.

### `POST /api/meals`

Mengirimkan pesanan(orders) baru.

Payload:

```json
{
  "items": string,
  "table": string,
  "total": number
}
```
## Database

Database prototipe ini menggunakan MongoDB yang dapat diakses dengan melakukan login ke Website MongoDB dengan akun ini.
```text
email: tubeslasti@gmail.com
password: .SemogaLastiDapetA
```

## LICENSE

![GitHub](https://img.shields.io/github/license/MarioNicholas/K01_Kelompok1_Deliverable4?style=flat-square) ![GitHub package.json version](https://img.shields.io/github/package-json/v/MarioNicholas/K01_Kelompok1_Deliverable4?style=flat-square)
