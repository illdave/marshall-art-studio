<?xml version="1.0" encoding="ISO-8859-1" ?> 
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template name="nav">
	<xsl:variable name="cur-sections" select="/content/section" />
	<xsl:variable name="cur-file" select="/content/topic/@file" />
	<div id="navcol">
		<h4>All Topics</h4>
		<ul>
			<xsl:for-each select="$topics/content/topic">
				<xsl:choose>
					<xsl:when test="@file=$cur-file">
						<li>
							<xsl:value-of select="@title" />
							<ul>
								<xsl:for-each select="$cur-sections">
									<li><a href="#{@id}"><xsl:value-of select="@title" /></a></li>
								</xsl:for-each>
							</ul>
						</li>
					</xsl:when>
					<xsl:otherwise>
						<li><a href="{@file}"><xsl:value-of select="@title" /></a></li>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:for-each>
		</ul>
	</div>
</xsl:template>
</xsl:stylesheet>