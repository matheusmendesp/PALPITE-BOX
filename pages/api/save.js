import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'
import { fromBase64 } from '../../utils/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)

    const sheetConfig = doc.sheetsByIndex[2]
    await sheetConfig.loadCells('A2:B2')

    const mostrarPromocaoCell = sheetConfig.getCell(1, 0)
    const textoCell = sheetConfig.getCell(1, 1)

    let Cupom = ''
    let Vagas = ''
    if (mostrarPromocaoCell.value === 'VERDADEIRO') {
      Cupom = 'Inscrições dessa semana encerrada.'
      Vagas = textoCell.value
    }

    // Nome	Email	Whatsapp	Cupom	Promo
    await sheet.addRow({
      Nome: data.Nome,
      Pedido: data.Pedido,
      Culto: data.Culto,
      Visitante: data.Visitante,
      'Data Preenchimento': moment().format('DD/MM/YYYY HH:mm:ss'),
      Cupom,
      Vagas
    })
    res.end(JSON.stringify({
      showText: Cupom !== '',
      Cupom,
      Vagas
    }))
  } catch (err) {
    console.log(err)
    res.end('error')
  }
}
