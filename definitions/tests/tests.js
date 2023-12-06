// Now, define the unit test.
test("test_explore_state")
    // Specify the name of the dataset under test.
    .dataset("explore")
    // Provide the fake input.
    .input(
        "international_top_terms",
        `
      SELECT 'Brazil' AS country_name, 'State of Goias' AS region_name, 'BR-GO' AS region_code, DATE('2023-10-08') AS week, 'Botafogo x Palmeiras' AS term, 1 AS score, 1 AS rank, 'BR' AS country_code, DATE('2023-10-08') AS refresh_date
      UNION ALL SELECT 'Brazil' AS country_name, 'State of Goias' AS region_name, 'BR-GO' AS region_code, DATE('2023-10-08') AS week, 'Botafogo x Palmeiras' AS term, 32 AS score, 20 AS rank, 'BR' AS country_code, DATE('2023-10-08') AS refresh_date
      UNION ALL SELECT 'Brazil' AS country_name, 'State of Goias' AS region_name, 'BR-RJ' AS region_code, DATE('2023-10-08') AS week, 'Botafogo x Palmeiras' AS term, 32 AS score, 1 AS rank, 'BR' AS country_code, DATE('2023-10-08') AS refresh_date
      UNION ALL SELECT 'Brazil' AS country_name, 'State of Goias' AS region_name, 'BR-RS' AS region_code, DATE('2023-10-08') AS week, 'Botafogo x Palmeiras' AS term, 32 AS score, 1 AS rank, 'BR' AS country_code, DATE('2023-10-08') AS refresh_date
    `
    )
    // Provide the expected output of running.
    .expect(
        `
      SELECT DATE('2023-10-08') AS week, 'Botafogo x Palmeiras' AS term, 'GO' AS state, 1 AS score
    `
    );
