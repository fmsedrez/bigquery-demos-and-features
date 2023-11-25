// Now, define the unit test.
test("test_explore_state")
    // Specify the name of the dataset under test.
    .dataset("explore")
    // Provide the fake input.
    .input(
        "international_top_terms",
        `
      SELECT '2023-10-08' AS week, 'Botafogo x Palmeiras' AS term, 'GO' AS state, 1 AS score UNION ALL
      SELECT '2023-10-08' AS week, 'Botafogo x Palmeiras' AS term, 'GO' AS state, 20 AS score UNION ALL
      SELECT '2023-10-08' AS week, 'Botafogo x Palmeiras' AS term, 'RS' AS state, 1 AS score UNION ALL
      SELECT '2023-10-08' AS week, 'Botafogo x Palmeiras' AS term, 'RJ' AS state, 1 AS score UNION ALL
    `
    )
    // Provide the expected output of running.
    .expect(
        `
      SELECT '2023-10-08' AS week, 'Botafogo x Palmeiras' AS term, 'GO' AS state, 1 AS score
    `
    );
