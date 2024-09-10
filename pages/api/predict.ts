import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import type { NextApiRequest, NextApiResponse } from 'next';

// Define the interface for the CSV data
interface CsvRow {
    'Pelajaran Favorit': string;
    'Minat Utama': string;
    'Keterampilan Unggulan': string;
    'Lingkungan Kerja': string;
    'Tipe Kepribadian': string;
    'Gaya Belajar': string;
    Fakultas: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { pelajaranFavorit, minatUtama, keterampilanUnggulan, lingkunganKerja, tipeKepribadian, gayaBelajar } = req.body;

        const results: CsvRow[] = []; // Explicitly define the type of results
        const csvFilePath = path.resolve(process.cwd(), 'public', 'data-minat.csv');

        // Read the CSV file
        fs.createReadStream(csvFilePath)
            .pipe(csv())
            .on('data', (data: CsvRow) => {
                console.log('CSV Data:', data); // Log each row
                results.push(data);
            })
            .on('end', () => {
                // Find the matching Fakultas
                const match = results.find(row =>
                    row['Pelajaran Favorit'].trim() === pelajaranFavorit.trim() &&
                    row['Minat Utama'].trim() === minatUtama.trim() &&
                    row['Keterampilan Unggulan'].trim() === keterampilanUnggulan.trim() &&
                    row['Lingkungan Kerja'].trim() === lingkunganKerja.trim() &&
                    row['Tipe Kepribadian'].trim() === tipeKepribadian.trim() &&
                    row['Gaya Belajar'].trim() === gayaBelajar.trim()
                );

                if (match) {
                    console.log('Match Found:', match); // Log the match
                    res.status(200).json({ fakultas: match.Fakultas });
                } else {
                    res.status(404).json({ message: 'No matching fakultas found' });
                }
            });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
