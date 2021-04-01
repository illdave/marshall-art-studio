<?xml version="1.0" encoding="ISO-8859-1" ?> 
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="a">
		<a href="{@href}" target="{@target}" class="{@class}"><xsl:apply-templates /></a>
	</xsl:template>
	<xsl:template match="b">
		<b><xsl:apply-templates /></b>
	</xsl:template>
	<xsl:template match="blockquote">
		<blockquote id="{@id}" class="{@class}"><xsl:apply-templates /></blockquote>
	</xsl:template>
	<xsl:template match="br">
		<xsl:apply-templates /><br />
	</xsl:template>
	<xsl:template match="code">
		<code id="{@id}" class="{@class}"><xsl:apply-templates /></code>
	</xsl:template>
	<xsl:template match="div">
		<div id="{@id}" class="{@class}"><xsl:apply-templates /></div>
	</xsl:template>
	<xsl:template match="h2">
		<h2 id="{@id}" class="{@class}"><xsl:apply-templates /></h2>
	</xsl:template>
	<xsl:template match="h3">
		<h3 id="{@id}" class="{@class}"><xsl:apply-templates /></h3>
	</xsl:template>
	<xsl:template match="h4">
		<h4 id="{@id}" class="{@class}"><xsl:apply-templates /></h4>
	</xsl:template>
	<xsl:template match="img">
		<img src="{@src}" style="{@style}" align="{@align}"><xsl:apply-templates /></img>
	</xsl:template>
	<xsl:template match="li">
		<li id="{@id}" class="{@class}"><xsl:apply-templates /></li>
	</xsl:template>
	<xsl:template match="ol">
		<ol id="{@id}" class="{@class}"><xsl:apply-templates /></ol>
	</xsl:template>
	<xsl:template match="p">
		<p id="{@id}" class="{@class}"><xsl:apply-templates /></p>
	</xsl:template>
	<xsl:template match="em">
		<em id="{@id}" class="{@class}"><xsl:apply-templates /></em>
	</xsl:template>
	<xsl:template match="pre">
		<pre id="{@id}" class="{@class}"><xsl:apply-templates /></pre>
	</xsl:template>
	<xsl:template match="span">
		<span id="{@id}" class="{@class}"><xsl:apply-templates /></span>
	</xsl:template>
	<xsl:template match="strong">
		<strong><xsl:apply-templates /></strong>
	</xsl:template>
	<xsl:template match="table">
		<table width="{@width}" cellspacing="{@cellspacing}" rules="{@rules}"><xsl:apply-templates /></table>
	</xsl:template>
	<xsl:template match="td">
		<td align="{@align}" width="{@width}" valign="{@valign}"><xsl:apply-templates /></td>
	</xsl:template>
	<xsl:template match="tr">
		<tr><xsl:apply-templates /></tr>
	</xsl:template>
	<xsl:template match="ul">
		<ul id="{@id}" class="{@class}"><xsl:apply-templates /></ul>
	</xsl:template>
	
</xsl:stylesheet>