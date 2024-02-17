def sale_hotdogs_a(n):
    if n < 5: return n * 100
    elif n < 10: return n * 95
    else: return  n * 90

def sale_hotdogs_b(n):
    if n < 5: return n * 100
    return (n * 95) if n < 10 else n * 90
