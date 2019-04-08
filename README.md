# Smallcase portfolio tracking assignment

What I have Used : 
<pre>
1.Typescript
2.Express
3.Joi - for validation
4.body-parser - to parse the incoming request
5.mongosee - ODM  
</pre>

### Api End-points :

<pre>
- ` /api/trade/buy `  : POST : To Buy a share in the security .
- ` /api/trade/sell ` : POST : To Sell a share in security.
- ` /api/portfolio `  : GET  : To get all portfolio.
- ` /api/cumulative ` : GET  : To get cumulative returns of all the portfolio.
- ` /api/security `   : POST : To add a new Security.
</pre>

### Ex. Buy Trade
Input : 
<pre>
- tickerSymbol
- price
- quantity
</pre>
Output : (after updating the security)
<pre>
- tickerSymbol
- averageBuyPrice
- shares
</pre>

Code screeshot:
![carbon](https://user-images.githubusercontent.com/17231224/55733691-e7cc3180-5a3b-11e9-9bef-0cce7015660b.png)

Output screenshot :
![tradebuy](https://user-images.githubusercontent.com/17231224/55734708-ab013a00-5a3d-11e9-9892-5281ea00772a.png)

Error handling for the invalid price and quantity :
Inavalid Quantity : 
![errorhandling](https://user-images.githubusercontent.com/17231224/55734893-ffa4b500-5a3d-11e9-8bac-3678908bc74a.png) 

Invalid Ownership :
![errorhandling2](https://user-images.githubusercontent.com/17231224/55734931-0a5f4a00-5a3e-11e9-8faa-743c190f8919.png)


